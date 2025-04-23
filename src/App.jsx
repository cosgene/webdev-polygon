import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContent from './components/AppContent';

function App() {
    const labs = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9'];

    return (
        <BrowserRouter>
            <Provider store={store}>
              <AuthProvider>
                  <ThemeProvider>
                      <AppContent labs={labs}/>
                  </ThemeProvider>
              </AuthProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;