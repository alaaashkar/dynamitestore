import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./../firebase";
import { onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  const value = {
    authUser,
    setAuthUser
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => listen();
  },
    [])


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider >
  )
};

export const useAuth = () => useContext(AuthContext)