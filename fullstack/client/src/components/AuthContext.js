import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setToken(token);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, loading}}>
      {children}
    </AuthContext.Provider>
  )
};