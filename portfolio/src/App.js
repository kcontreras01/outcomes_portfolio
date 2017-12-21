import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.js";
import Landing from "./Components/Landing.js";
import BrandStatement from "./Components/BrandStatement.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";

class App extends Component {
  render() {
    return (
    	<div>
    	<Nav />
    	<Landing />
      <BrandStatement/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;

