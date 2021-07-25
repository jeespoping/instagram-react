import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import {useMutation} from '@apollo/client'
import { LOGIN } from '../../../gql/user'
import {setToken} from '../../../utils/token'


import "./LoginForm.scss"

export default function LoginForm() {
    const [error, setError] = useState("");
    const [login] = useMutation(LOGIN);

    const formik = useFormik({
        initialValues: initialValue(),
        validationSchema: Yup.object({
            email: Yup.string().email("El email no es valido").required("El email es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
        }),

        onSubmit: async (FormData) => {
            setError("");
            try {
                const {data} = await login({
                    variables: {
                        input: FormData,
                    }
                });

                const { token } = data.login;
                setToken(token);
               
            } catch (error) {
                setError(error.message);
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="login-form">
            <h2>Entra para ver fotos y videos de tus amigos</h2>
            <Form.Input error={formik.errors.email} value={formik.values.email} onChange={formik.handleChange} type="text" placeholder="Correo electronico" name="email" />
            <Form.Input error={formik.errors.password && true} value={formik.values.password} onChange={formik.handleChange} type="password" placeholder="Password" name="password" />
            <Button type="submit" className="btn-submit">
                Iniciar sesion
            </Button>
            {error && <p className="submit-error">{error}</p>}
        </Form>
    )
}

function initialValue() {
    return {
        email: "",
        password: "",
    }
}
