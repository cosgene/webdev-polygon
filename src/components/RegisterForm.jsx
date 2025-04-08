import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RegisterForm = ({onSubmit}) => {
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
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm your password:</label>
                        <Field type="password" name="confirmPassword"/>
                        <ErrorMessage name="confirmPassword" component="div"/>
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