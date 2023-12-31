import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext=createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const {user,setUser}=useState(null);


    const providerLogin=(provider)=>{
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        return signOut(auth)
    }


    useEffect(()=>{
     const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubcribe();
        }
    },[]);

    



    const authInfo={auth,providerLogin,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;