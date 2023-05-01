import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase.config';
const auth = getAuth(app)


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }


    useEffect(()=> {
        const unsub = onAuthStateChanged(auth,currentUser => {
         
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsub()
        }
    },[])


    const info = {
        user,
        createUser,
        loginUser,
        signOutUser,
        loading
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;