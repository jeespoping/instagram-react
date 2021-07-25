import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './config/apollo';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify'  

export default function App() {
  const [auth, setAuth] = useState(undefined);


  return (
    <ApolloProvider client={ client }>
      {!auth ? <Auth /> : <h1>Estas logeado</h1>}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
    </ApolloProvider>    
  );
}
