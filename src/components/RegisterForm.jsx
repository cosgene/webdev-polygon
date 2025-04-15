import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required('Required field'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Required field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords should match')
    .required('Required field'),
});

const RegisterForm = ({ onSubmit }) => {
  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto' }}>
      <h2>Sign up</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
            <Field
              as={TextField}
              name="confirmPassword"
              label="Confirm password"
              type="password"
              fullWidth
              margin="normal"
              error={touched.confirmPassword && !!errors.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;