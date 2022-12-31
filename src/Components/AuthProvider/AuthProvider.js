import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login=(email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // updateName
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //   google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //logout

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    userCreate,
    updateName,
    googleLogin,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
