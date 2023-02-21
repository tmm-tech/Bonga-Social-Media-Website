import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Leftnav from './Components/Leftnav';
import Rightnav from './Components/Rightnav';



function App() {
  return (
    <div className="App">
      {/*NAVBAR*/}
      <NavBar/>

     
      <Leftnav/>
     
     
      <Rightnav/>
      
      {/*FOOTER*/}
      <Footer/>
    </div>
  );
}

export default App;
