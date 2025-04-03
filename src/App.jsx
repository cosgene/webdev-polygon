import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider'
import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';


function App() {
  const [selectedLab, setLab] = useState();
  const labs = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9'];

  return (
    <Router>
      <ThemeProvider>
        <Header/>
        <Menu 
          items={labs}
          onSelectItem={setLab}
        />
        <Routes>
          <Route path="/lab/:labId" element={<Content selectedLab={selectedLab}/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
