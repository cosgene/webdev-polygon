import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Box} from '@mui/material';

const Menu = ({ items, open, onClose }) => {
  const location = useLocation();

  return (
    <Drawer
      variant='temporary'
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '75%', sm: 300, md: 300 }, // Адаптивная ширина
          boxSizing: 'border-box',
        },
      }}
    >
        <Box sx={{ p: 2 }}>
            <List>
                <ListItem>
                <ListItemText primary="Lab List" primaryTypographyProps={{ variant: 'h6' }} />
                </ListItem>
                {items.map((item, index) => (
                <ListItem
                    button
                    key={index}
                    component={RouterLink}
                    to={`/lab/${index + 1}`}
                    selected={location.pathname === `/lab/${index + 1}`}
                    onClick={onClose}
                    style={{color: 'inherit'}}
                >
                    <ListItemText primary={item} />
                </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
  );
};

export default Menu;