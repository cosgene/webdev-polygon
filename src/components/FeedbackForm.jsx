import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  message: Yup.string().required('Required field'),
});

const FeedbackForm = ({ onSubmit }) => {
  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <h3>Feedback</h3>
      <Formik
        initialValues={{ name: '', message: '' }}
        validationSchema={FeedbackSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              name="message"
              label="Message"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              error={touched.message && !!errors.message}
              helperText={touched.message && errors.message}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FeedbackForm;