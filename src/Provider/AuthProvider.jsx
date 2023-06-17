import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sign up with email password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // sign out
    const signout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update profile
    const updateUserProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
       })
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt', {
                   email: currentUser.email 
                })
                .then(data => {
                    // console.log(data)
                    localStorage.setItem('access-token', data.data.token);
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            
        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signout,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;