import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useLoginState } from "../authContext";
import { useCallback } from "react";

const RegisterForm = () => {
    const {login} = useLoginState();
    
    const handleSumbit = useCallback((values, {setSubmitting, resetForm}) => {
        login(values.email);
        resetForm();
        setSubmitting(false);
    },[login])

    return (
        <Formik
            initialValues={{email: "", password: "", confirmPassword: ""}}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Incorrect email")
                    .required("Required field"),
                password: Yup.string()
                    .min(8, "At least 8 characters")
                    .required("Required field"),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password")], "Passwords should match")
                    .required("Required field"),
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
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <div>
                        <label>Confirm your password:</label>
                        <Field type="password" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error"/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Sign up
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default RegisterForm;