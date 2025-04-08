import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
    email: Yup.string()
        .email('Incorrect email')
        .required('Required field'),
});

const ProfileEditForm = ({initialValues, onSubmit}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ProfileSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component='div'/>
                    </div>
                    <button type='submit' disabled={isSubmitting}>
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default ProfileEditForm;