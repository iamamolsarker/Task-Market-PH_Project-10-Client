import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
    const userInfo = {
        createUser,
        loginInWithEmail,
        user
    }

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
};

export default AuthProvider;