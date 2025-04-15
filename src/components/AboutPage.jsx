import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        This is the about page.
      </Typography>
    </Box>
  );
};

export default AboutPage;