import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useLoginState } from "../authContext";
import { useCallback } from "react";

const LoginForm = () => {
    const {login} = useLoginState();

    const handleSumbit = useCallback((values, {setSubmitting}) => {
        login(values.email);
        setSubmitting(false);
    },[login])

    return (
        <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Incorrect email")
                    .required("Required field"),
                password: Yup.string()
                    .required("Required field")
            })}
            onSubmit={handleSumbit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div" className="error"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div" className="error"/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Log in
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;