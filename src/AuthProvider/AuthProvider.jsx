import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const auth = getAuth();

  const [user, setUser] = useState(app)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const logOut = () => {
    return signOut(auth)
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscride = onAuthStateChanged(auth, currentUser => {
      console.log('inside user', currentUser)
      setUser(currentUser)
    });
    return () => {
      unsubscride();
    }
  }, [])

  const userInfo = {
    user,
    createUser,
    logOut,
    signIn
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;