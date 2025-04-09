import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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

const AppContent = ({selectedLab, setLab, labs}) => {
    const {isLoggedIn, login} = useLoginState();
    // const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const { user, feedbacks, loginError } = useSelector((state) => state);

    // const handleLoginSubmit = useCallback(async (values, {setSubmitting}) => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/users?email=${values.email}&password=${values.password}`);
    //         if (!response.ok) {
    //             throw new Error('Request error');
    //         }

    //         const users = await response.json();
    //         if (users.length === 0) {
    //             throw new Error('Incorrect email or password');
    //         }

    //         const foundUser = users[0];
    //         setUser({ username: foundUser.email, id: foundUser.id, password: foundUser.password });
    //         login();
    //     } catch (error) {
    //         console.error('Error logging in: ', error.message);
    //     } finally {
    //         setSubmitting(false);
    //     }
    // },[login])
      
    // const handleRegisterSubmit = useCallback(async (values, {setSubmitting}) => {
    //     try {
    //         const {email, password} = values;

    //         const response = fetch('http://localhost:3001/users', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({email, password}),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Sign up error');
    //         }

    //         const data = await response.json();
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     } finally {
    //         setSubmitting(false);
    //     }
    // },[])

    // const handleProfileEditSubmit = useCallback(async (values, {setSubmitting}) => {
    //   try {
    //       console.log(`${user.password}`);
    //       const response = await fetch(`http://localhost:3001/users/${user.id}`, {
    //           method: 'PUT',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({email: values.email, password: user.password}),
    //       });

    //       if (!response.ok) {
    //           throw new Error('Error updating profile');
    //       }

    //       const updatedUser = await response.json();
    //       setUser({username: updatedUser.email, id: updatedUser.id, password: user.password});
    //   } catch (error) {
    //       console.error('Error:', error.message);
    //   } finally {
    //       setSubmitting(false);
    //   }
    // }, [user])

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
            <Menu items={labs} onSelectItem={setLab}/>
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
    const [selectedLab, setLab] = useState();
    const labs = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9'];

    return (
        <Router>
            <Provider store={store}>
              <AuthProvider>
                  <ThemeProvider>
                      <AppContent selectedLab={selectedLab} setLab={setLab} labs={labs}/>
                  </ThemeProvider>
              </AuthProvider>
            </Provider>
        </Router>
    );
}

export default App;