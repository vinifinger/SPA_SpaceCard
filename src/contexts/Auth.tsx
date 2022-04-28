import React, { createContext, useEffect, useState } from 'react';
import firebaseAuth from '../services/firebaseAuth';
import api from '../services/api';
interface AuthContextData {
    user: firebaseAuth.User | null;
    isSigned: boolean;
    loading: boolean;
    LoginEmailAndPassword(email: string, password: string): Promise<boolean>;
    Logout(): void;
    LoginGoogle(): Promise<boolean>;
    SignUpEmailAndPassword(email: string, password: string): Promise<boolean>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [isSigned, setIsSigned] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<firebaseAuth.User | null>(null);

    useEffect(() => {
        firebaseAuth.getAuth().onAuthStateChanged((user) => {
            setUser(user);

            const storagedToken = user?.getIdToken;        
            if (storagedToken) {
              setIsSigned(true);
              api.defaults.headers.token = storagedToken;
            }
            setLoading(false);
        });
    }, []);

    async function LoginEmailAndPassword(email: string, password: string) {
        const auth = firebaseAuth.getAuth();
        return await firebaseAuth.signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            api.defaults.headers.token = await userCredential.user.getIdToken();
            return true;
        })
        .catch((error) => {
            const errorCode = error.code;
            throw errorCode;
        });
    }

    async function SignUpEmailAndPassword(email: string, password: string) {
        const auth = firebaseAuth.getAuth();
        return await firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            api.defaults.headers.token = await userCredential.user.getIdToken();
            return true;
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
        return await firebaseAuth.signInWithPopup(auth, provider)
        .then(async (userCredential) => {
            api.defaults.headers.token = await userCredential.user.getIdToken();
            return true;
        })
        .catch((error) => {
            console.log('sign up');
            const errorCode = error.code;
            throw errorCode;
        });
    }

    async function Logout() {
        setIsSigned(false);
        await firebaseAuth.getAuth().signOut();
    }

    return (
        <AuthContext.Provider value={{ user, isSigned, loading, LoginEmailAndPassword, Logout, LoginGoogle, SignUpEmailAndPassword }}>
        {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;