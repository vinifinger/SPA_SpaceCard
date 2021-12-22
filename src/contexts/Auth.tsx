import React, { createContext, useEffect, useState } from 'react';
import firebaseAuth from '../services/firebaseAuth';
import api from '../services/api';
interface AuthContextData {
    isSigned: boolean;
    loading: boolean;
    LoginEmailAndPassword(email: string, password: string): Promise<void>;
    Logout(): void;
    LoginGoogle(): Promise<void>;
    SignUpEmailAndPassword(email: string, password: string): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [isSigned, setIsSigned] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storagedToken = localStorage.getItem('onToken');
        
        if (storagedToken) {
          setIsSigned(true);
          api.defaults.headers.token = storagedToken;
        }
        setLoading(false);
    }, []);

    async function LoginEmailAndPassword(email: string, password: string) {
        const auth = firebaseAuth.getAuth();
        await firebaseAuth.signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('onToken', await user.getIdToken());
            api.defaults.headers.token = await user.getIdToken();
            setIsSigned(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            throw errorCode;
        });
    }

    async function SignUpEmailAndPassword(email: string, password: string) {
        const auth = firebaseAuth.getAuth();
        await firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('onToken', await user.getIdToken());
            api.defaults.headers.token = await user.getIdToken();
            setIsSigned(true);
        })
        .catch((error) => {
            console.log('sign up');
            const errorCode = error.code;
            throw errorCode;
        });
    }
    
    async function LoginGoogle() {
        const auth = firebaseAuth.getAuth();
        const provider = new firebaseAuth.GoogleAuthProvider();
        const user = await firebaseAuth.signInWithPopup(auth, provider);
        console.log(user);
        if (user) {
            localStorage.setItem('onToken', await user.user.getIdToken());
            api.defaults.headers.token = await user.user.getIdToken();
            setIsSigned(true);
        }
    }

    function Logout() {
        setIsSigned(false);
        sessionStorage.removeItem('onToken');
    }

    return (
        <AuthContext.Provider value={{ isSigned, loading, LoginEmailAndPassword, Logout, LoginGoogle, SignUpEmailAndPassword }}>
        {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;