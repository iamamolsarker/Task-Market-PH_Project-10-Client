import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import {  auth } from '../firebase/firebase.init';


const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginInWithEmail = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (name, photo) => {
        return updateProfile (auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const logOut = () => {
        setLoading(false);
        return signOut (auth)
    }

    const signInGoogle = () => {
            setLoading(false)
            return signInWithPopup(auth, provider)
        }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return(()=>{
            unsubscribe();
        })
    },[])
    const userInfo = {
        createUser,
        loginInWithEmail,
        user,
        setUser,
        updateUser,
        logOut,
        loading,
        setLoading,
        signInGoogle

    }

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
};

export default AuthProvider;