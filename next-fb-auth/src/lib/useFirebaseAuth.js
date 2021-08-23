import { useState, useEffect } from 'react'
import {firebase} from "./firebaseConfig"

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

 const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return;
        }
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);

    };


    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    // signIn
    const signInWithEmailAndPassword = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password);
    //  create
    const createUserWithEmailAndPassword = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password);
    //  signOut
    const signOut = () =>
        firebase.auth().signOut()

    // listen for state change
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut

    };
}

export  default useFirebaseAuth()