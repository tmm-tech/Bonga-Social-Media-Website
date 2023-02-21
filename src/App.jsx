import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      {/*NAVBAR*/}
      <NavBar/>
      <HomePage/>
      {/*FOOTER*/}
      <Footer/>
    </div>
  );
}

export default App;
