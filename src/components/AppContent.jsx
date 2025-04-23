import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useLoginState } from '../context/AuthContext';
import { loginUser, registerUser, addFeedback } from '../redux/actions';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import FeedbackForm from './FeedbackForm';
import Header from './Header';
import Menu from './Menu';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import LabContent from './LabContent';
import Footer from './Footer';
import { Box } from '@mui/material';
import QuickActions from './QuickActions';
import UserProfile from './UserProfile';
import AdminPage from './AdminPage';

const AppContent = ({ labs }) => {
  const { isLoggedIn, login } = useLoginState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLoginSubmit = (values, { setSubmitting }) => {
    dispatch(loginUser(values, login));
    setSubmitting(false);
  };

  const handleRegisterSubmit = (values, { setSubmitting }) => {
    dispatch(registerUser(values));
    setSubmitting(false);
  };

  const handleAddFeedback = (values) => {
    dispatch(addFeedback(values));
  };

  if (!isLoggedIn) {
    return (
        <>
            <LoginForm onSubmit={handleLoginSubmit} />
            <RegisterForm onSubmit={handleRegisterSubmit} />
        </>
    );
  }

  return (
    <>
      <Header user={user} toggleDrawer={toggleDrawer} />
      <Menu items={labs} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Box sx={{ p: { xs: 2, sm: 3 }, pb: { xs: 8, sm: 8, md: 3 } }}>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/feedback" element={<FeedbackForm onSubmit={handleAddFeedback}/>} />
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/lab/:labId" element={<LabContent />} />
        </Routes>
        <Box sx={{ mt: 4 }}>
            <Footer />
        </Box>
      </Box>
      <QuickActions/>
    </>
  );
};

export default AppContent;