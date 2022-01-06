import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import React, { Component }  from 'react';
import {BrowserRouter as Router,Routes,Route,Link, NavLink} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Footer from './component/Footer';


function App() {
  return (
      <>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/react" element={<Home  title="Home" />} />
            <Route exact path="/about" element={<About title="About Us" />} />
            <Route exact path="/service" element={<Service title="Service" />} />
            <Route exact path="/contact" element={<Contact title="Contact Us" />} />
          </Routes>
          <Footer />
        </Router>
      </>
  );
}

export default App;
