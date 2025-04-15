import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Alert } from '@mui/material';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect email').required('Required field'),
  password: Yup.string().required('Required field'),
});

const LoginForm = ({ onSubmit, error }) => {
  return (
    <Box sx={{ p: 2, maxWidth: 400, mx: 'auto' }}>
      <h2>Log in</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
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
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
              sx={{ mt: 2 }}
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;