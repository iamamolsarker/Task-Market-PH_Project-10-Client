import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import {  auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (name, photo) => {
        return updateProfile (auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const logOut = () => {
        return signOut (auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
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
        logOut

    }

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
};

export default AuthProvider;