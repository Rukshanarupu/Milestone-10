import React, { createContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth (app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    // mail signIn and signOut system
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth)
    }

    // google signIn and signOut system
    const googleSign=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    //OBSERVE auth state change
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            // console.log('auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        // stop observing while unmounting
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
        user, loading, createUser, signInUser, logOut, googleSign
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;