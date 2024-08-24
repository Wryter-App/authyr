import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../config/firebase.config";

const authContext = createContext();

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const registerUser = (name, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then((result) => {
      updateProfile(result.user, {
        displayName: name
      })
    }).catch(error => {
      setError(error)
    })
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).catch(error => {
      setError(error)
    })
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        setError(null)
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    registerUser,
    user,
    loginUser,
    logOut,
    loading,
    error
  };

  return (
    <authContext.Provider value={authValue} displayName="auth">
      {children}
    </authContext.Provider>
  );
};
