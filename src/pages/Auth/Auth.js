import React, { useState } from 'react';
import { Container, Image } from "semantic-ui-react";
import instagram from '../../assets/logo.png';
import RegisterForm from '../../components/Auth/RegisterForm';
import "./Auth.scss";

export default function Auth() {


    const [showLogin, setShowLogin] =useState(true);

    return (
        <Container fluid className="auth">
            <Image src={instagram}></Image>

            <div className="container-form">
                {showLogin ? <p>Formulario de Login</p> : <RegisterForm setShowLogin={setShowLogin}></RegisterForm>}
            </div>

            <div className="change-form">
                <p>
                    {showLogin ? (
                        <>
                            No tienes cuenta?
                            <span onClick={ () => setShowLogin(!showLogin) }>Registrate</span>
                        </>
                    ) : (
                        <>
                            Entra con tu cuenta!
                            <span onClick={ () => setShowLogin(!showLogin) }>Iniciar sesion</span>
                        </>
                    )}
                </p>
            </div>
        </Container>
    )
}
