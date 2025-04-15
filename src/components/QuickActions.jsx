import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, useMediaQuery, useTheme } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EditIcon from '@mui/icons-material/Edit';
import {Link as RouterLink} from 'react-router-dom';


const QuickActions = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Send feedback"
          icon={<FeedbackIcon />}
          component={RouterLink} 
          to='/feedback'
        />
        <BottomNavigationAction
          label="Edit profile"
          icon={<EditIcon />}
          component={RouterLink} 
          to='/profile'
        />
      </BottomNavigation>
    </Paper>
  );
};

export default QuickActions;