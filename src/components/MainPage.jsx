import React from 'react';
import { Typography, Box } from '@mui/material';

const MainPage = () => {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="body1">
        This is the main page.
      </Typography>
    </Box>
  );
};

export default MainPage;