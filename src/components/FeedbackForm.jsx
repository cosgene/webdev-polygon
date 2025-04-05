import { ErrorMessage, Field, Form, Formik } from "formik";
import { useCallback } from "react";
import * as Yup from "yup";

const FeedbackForm = ({onAddFeedback}) => {
    const handleSumbit = useCallback((values, {resetForm}) => {
        onAddFeedback(values);
        resetForm();
    }, []);

    return (
        <Formik
            initialValues={{name: "", message: ""}}
            validationSchema={Yup.object({
                name: Yup.string().required("Enter your name"),
                message: Yup.string().required("Enter your message"),
            })}
            onSubmit={handleSumbit}
        >
            {() => (
                <Form>
                    <div>
                        <label>Name:</label>
                        <Field name="name" type="text"/>
                        <ErrorMessage name="name" component="div" className="error"/>
                    </div>
                    <div>
                        <label>Message:</label>
                        <Field name="message" as="textarea" rows="4"/>
                        <ErrorMessage name="message" component="div" className="error"/>
                    </div>
                    <button type="submit">
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default FeedbackForm;