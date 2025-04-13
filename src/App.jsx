import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { AuthProvider, useLoginState } from './context/AuthContext';
import ProfileEditForm from './components/ProfileEditForm';
import { Provider, useDispatch, useSelector} from 'react-redux';
import store from './redux/store';
import {
  registerUser,
  loginUser,
  updateUserProfile,
} from './redux/actions';

const AppContent = ({labs}) => {
    const {isLoggedIn, login} = useLoginState();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    const handleLoginSubmit = (values, { setSubmitting }) => {
        dispatch(loginUser(values, login));
        setSubmitting(false);
    };

    const handleRegisterSubmit = (values, { setSubmitting }) => {
        dispatch(registerUser(values));
        setSubmitting(false);
    };

    const handleProfileEditSubmit = (values, { setSubmitting }) => {
        if (user) {
            dispatch(updateUserProfile(user.id, { email: values.email, password: user.password }));
        }
        setSubmitting(false);
    };
    
    if (!isLoggedIn) {
        return <LoginForm onSubmit={handleLoginSubmit}/>;
    }

    return (
        <div>
            <Header username={user?.email}/>
            <Menu items={labs}/>
            <ProfileEditForm 
                initialValues={{email: user?.email || ''}}
                onSubmit={handleProfileEditSubmit}
            />
            <Routes>
                <Route path="/lab/:labId/" element={<Content/>}/>
            </Routes>
            <RegisterForm onSubmit={handleRegisterSubmit}/>
            <Footer/>
        </div>
    );
}

function App() {
    const labs = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9'];

    return (
        <Router>
            <Provider store={store}>
              <AuthProvider>
                  <ThemeProvider>
                      <AppContent labs={labs}/>
                  </ThemeProvider>
              </AuthProvider>
            </Provider>
        </Router>
    );
}

export default App;