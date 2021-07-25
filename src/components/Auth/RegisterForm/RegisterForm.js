import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import './RegisterForm.scss';
import {Formik, useFormik} from "formik";

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: null,
        onSubmit: (formValue) => {
            console.log(formValue);
        }
    });

    return (
        <>
            <h2 className="register-form-title">Registrate para ver fotos y videos de tus amigos.</h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input onChange={formik.handleChange} type="text" placeholder="Nombre y apellidos" name="name"></Form.Input>
                <Form.Input onChange={formik.handleChange} type="text" placeholder="Correo electronico" name="email"></Form.Input>
                <Form.Input onChange={formik.handleChange} type="text" placeholder="Nombre de usuario" name="username"></Form.Input>
                <Form.Input onChange={formik.handleChange} type="password" placeholder="Contraseña" name="password"></Form.Input>
                <Form.Input onChange={formik.handleChange} type="password" placeholder="repetir contraseña" name="repeatPassword"></Form.Input>
                <Button type="submit" className="btn-submit">Registrarse</Button>
            </Form>
        </>
    );
}


function initialValues(){
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
    }
}