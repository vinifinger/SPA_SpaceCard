import React, { createContext, useEffect, useState } from 'react';
import firebaseAuth from '../services/firebaseAuth';
import api from '../services/api';
import history from '../utils/history';
interface AuthContextData {
    isSigned: boolean;
    user: object | null;
    loading: boolean;
    Login(email: String, password: String): Promise<void>;
    Logout(): void;
    LoginGoogle(): Promise<void>;
}
   
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storagedUser = localStorage.getItem('onUser');
        const storagedToken = localStorage.getItem('onToken');
        
        if (storagedToken && storagedUser) {
          setUser(JSON.parse(storagedUser));
          api.defaults.headers.token = storagedToken;
        }

        setLoading(false);
    }, []);

    async function Login(email: String, password: String) {
        const response = await api.post('/user/login', {
            email: email,
            password: password,
        });

        setUser({name: response.data.result.name, email: response.data.result.email});
        localStorage.setItem('onUser', JSON.stringify({name: response.data.result.name, email: response.data.result.email}));
        localStorage.setItem('onToken', response.data.result.token);
        api.defaults.headers.token = response.data.result.token;
        // console.log(response);
        history.push('/app');
    }
    
    async function LoginGoogle() {
        const auth = firebaseAuth.getAuth();
        const provider = new firebaseAuth.GoogleAuthProvider();
        const user = await firebaseAuth.signInWithPopup(auth, provider);
        
        if (user) {
            setUser({name: user.user.displayName, email: user.user.email});
            localStorage.setItem('onUser', JSON.stringify({name: user.user.displayName, email: user.user.email}));
            localStorage.setItem('onToken', await user.user.getIdToken());
            api.defaults.headers.token = await user.user.getIdToken();
        }
        history.push('/app');
        // console.log(user);
    }

    function Logout() {
        setUser(null);

        sessionStorage.removeItem('onToken');
        sessionStorage.removeItem('onUser');
        history.push('/login');
    }

    return (
        <AuthContext.Provider value={{ isSigned: Boolean(user), user, loading, Login, Logout, LoginGoogle }}>
        {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;