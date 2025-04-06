import React, { useCallback, useState } from 'react';
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

const AppContent = ({selectedLab, setLab, labs}) => {
  const {isLoggedIn, login} = useLoginState();
  const [user, setUser] = useState();

  const handleLoginSubmit = useCallback((values, {setSubmitting}) => {
      login();
      setUser({ username: values.email });
      setSubmitting(false);
  },[login])
      
  const handleRegisterSubmit = useCallback((values, {setSubmitting, resetForm}) => {
      login();
      resetForm();
      setUser({ username: values.email });
      setSubmitting(false);
  },[login])

  if (!isLoggedIn) {
    return <LoginForm onSubmit={handleLoginSubmit}/>;
  }

  return (
    <div>
        <Header username={user?.username}/>
        <Menu items={labs} onSelectItem={setLab}/>
        <Routes>
          <Route path="/lab/:labId" element={<Content selectedLab={selectedLab}/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

function App() {
  const [selectedLab, setLab] = useState();
  const labs = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9'];

  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <AppContent selectedLab={selectedLab} setLab={setLab} labs={labs}/>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;