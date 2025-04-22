import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { useLoginState } from '../context/AuthContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ user, toggleDrawer }) => {
  const { logout } = useLoginState();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={RouterLink} sx={{ flexGrow: 1 }} style={{textDecoration: 'none', color: 'inherit'}} to='/'>
          GK
        </Typography>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/feedback">
          Feedback
        </Button>
        <Switch
          checked={theme.palette.mode === 'dark'}
          onChange={() => theme.toggleTheme()}
          icon={<Brightness7Icon />}
          checkedIcon={<Brightness4Icon />}
        />
        {user && (
          <>
            <IconButton onClick={handleMenu} color="inherit">
              <Avatar>{user.email.charAt(0).toUpperCase()}</Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disabled>{user.email}</MenuItem>
              <MenuItem component={RouterLink} to='/profile'>Edit profile</MenuItem>
              {user?.role === 'admin' && (
                <MenuItem component={RouterLink} to='/admin'>Admin panel</MenuItem>
              )}
              <MenuItem onClick={() => { handleClose(); logout(); }}>
                Log out
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;