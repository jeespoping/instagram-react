import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as YUP from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
import "./RegisterForm.scss";

export default function RegisterForm(props) {
    const { setShowLogin } = props;
    const [register] = useMutation(REGISTER);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: YUP.object({
            name: YUP.string().required("Tu nombre es obligatorio"),
            username: YUP.string().matches(/^[a-zA-Z0-9-]*$/, "El nombre de usuario no puede tener espacio").required("El nombre de usuario es obligatorio"),
            email: YUP.string().email("El email no es valido").required("El email es obligatorio"),
            password: YUP.string().required("La contraseña es obligatoria").oneOf([YUP.ref("repeatPassword")], "Las contraseñas no son iguales"),
            repeatPassword: YUP.string().required("La contraseña es obligatoria").oneOf([YUP.ref("password")], "Las contraseñas no son iguales")
        }),
        onSubmit: (formData) => {
            try {
                const newUser = formData;
                delete newUser.repeatPassword;

                console.log(newUser);
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <>
            <h2 className="register-form-title">Registrate para ver fotos y videos de tus amigos.</h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input error={formik.errors.name && true} value={formik.values.name} onChange={formik.handleChange} type="text" placeholder="Nombre y apellidos" name="name"></Form.Input>
                <Form.Input error={formik.errors.username && true} value={formik.values.username} onChange={formik.handleChange} type="text" placeholder="Nombre de usuario" name="username"></Form.Input>
                <Form.Input error={formik.errors.email && true} value={formik.values.email} onChange={formik.handleChange} type="text" placeholder="Correo electronico" name="email"></Form.Input>
                <Form.Input error={formik.errors.password && true} value={formik.values.password} onChange={formik.handleChange} type="password" placeholder="Contraseña" name="password"></Form.Input>
                <Form.Input error={formik.errors.repeatPassword && true} value={formik.values.repeatPassword} onChange={formik.handleChange} type="password" placeholder="repetir contraseña" name="repeatPassword"></Form.Input>
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