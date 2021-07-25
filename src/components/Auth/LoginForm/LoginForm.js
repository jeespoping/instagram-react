import React from 'react'
import { useFormik } from 'formik'
import "./LoginForm.scss"
import * as Yup from 'yup';
import {Form, Button} from 'semantic-ui-react'

export default function LoginForm() {
    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: Yup.object({
            emai: Yup.string().email("El email no es valido").required("El email es obligatorio"),
            password: Yup.string().required("La contrase►4a es obligatoria"),
        }),

        onSubmit: (FormData) => {
            console.log(FormData);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="login-form">
            <h2>Entra para ver fotos y videos de tus amigos</h2>
            <Form.Input error={formik.errors.email && true} value={formik.values.email} onChange={formik.handleChange} type="text" placeholder="Correo electronico" name="email" />
            <Form.Input error={formik.errors.password && true} value={formik.values.password} onChange={formik.handleChange} type="password" placeholder="Password" name="password" />
            <Button type="submit" className="btn-submit">
                Iniciar sesion
            </Button>
        </Form>
    )
}

function initialValue() {
    return {
        email: "",
        password: "",
    }
}
