import { createContext, useEffect } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth= getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading, setLoading]= useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const singnInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider)

    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        singnInWithGoogle,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;