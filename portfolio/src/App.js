import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav.js";
import Landing from "./Components/Landing/Landing.js";
import BrandStatement from "./Components/BrandStatement/BrandStatement.js";
import Projects from "./Components/Projects/Projects.js";
import Skills from "./Components/Skills/Skills.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";

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

