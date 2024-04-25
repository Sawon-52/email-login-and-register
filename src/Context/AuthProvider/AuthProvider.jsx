import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoding] = useState(true);

  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  //obser auth state change
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Cournt value of the current user", currentUser);
      setUser(currentUser);
      setLoding(false);
    });

    return () => {
      unSubcribe();
    };
  }, [auth]);

  const authInfo = { user, createUser, SignInUser, logOut, loading };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

/**
 * 1.create context and export it
 * 2.set provider with value
 * 3.use the auth provider in the main.jsx file
 * 4.access childer in the AuthProvider component as children and use it in the middle of the provider
 *
 */
