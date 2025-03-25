import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [selectedLab, setLab] = useState();

  return (
    <div>
      <Header/>
      <Menu 
        items={['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9']}
        onSelectItem={setLab}
      />
      <Content selectedLab={selectedLab}/>
      <Footer/>
    </div>
  );
}

export default App;
