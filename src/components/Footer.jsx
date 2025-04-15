import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 4 }}>
      <Typography variant="body2">2025 © Gennady Kazakov</Typography>
    </Box>
  );
};

export default Footer;