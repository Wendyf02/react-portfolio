import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Header from './components/Header';
import About from  './components/About';
import Work from './components/work'
import Contact from './components/Contact'
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="App-header">
        <Header></Header>
      </div>

      <div className="About">
        <About></About>
      </div>

      <div className="Portfolio">
        <Work></Work>
      </div>
      <div className="Contact">
       <Contact></Contact>
      </div>
      <div className="Footer">
       {/* <Footer></Footer> */}
      </div>
     
    </div>
  );
}

export default App;
