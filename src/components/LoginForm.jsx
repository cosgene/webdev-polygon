import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = ({onSubmit}) => {
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
                    <button type="submit" disabled={isSubmitting}>
                        Log in
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;