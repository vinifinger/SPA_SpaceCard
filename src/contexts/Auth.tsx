import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    Login(email: String, password: String): Promise<void>;
    Logout(): void;
}
   
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    
    useEffect(() => {
        const storagedUser = localStorage.getItem('onUser');
        const storagedToken = localStorage.getItem('onToken');
    
        if (storagedToken && storagedUser) {
          setUser(JSON.parse(storagedUser));
          api.defaults.headers.token = storagedToken;
        }
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
        console.log(response);
    }   

    function Logout() {
        setUser(null);

        sessionStorage.removeItem('onToken');
        sessionStorage.removeItem('onUser');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
        {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;