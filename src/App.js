import React, { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify'
import { getToken } from './utils/token'  

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
  }, [])

  return (
    <ApolloProvider client={ client }>
      {!auth ? <Auth /> : <h1>Estas logeado</h1>}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
    </ApolloProvider>    
  );
}
