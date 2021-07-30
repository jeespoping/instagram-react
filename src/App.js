import React, { useState, useEffect, useMemo } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import { getToken } from './utils/token';
import AuthContext from './context/AuthContext';
import Home from './pages/Home'

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setAuth(null);
    }else{
      setAuth(token);
    }
    console.log(token);
  }, []);

  const logout = () => {
    console.log("Cerrar sesion");
  }

  const setUser = (user) =>{
    setAuth(user)
  }

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  return (
    <ApolloProvider client={ client }>
      <AuthContext.Provider value={authData}>      
        {!auth ? <Auth /> : <Home></Home>}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
      </AuthContext.Provider>    
    </ApolloProvider>
  );
}
