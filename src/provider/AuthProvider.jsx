import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.init';

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)} 

    const userInfo = {
        createUser,
    }

    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;