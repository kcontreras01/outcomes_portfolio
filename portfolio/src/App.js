import React, { Component } from 'react';
import './App.css';
import Landing from "./Components/Landing/Landing.js";
import ShowProjects from "./Components/Projects/ShowProjects.js";
import Contact from "./Components/Contact/Contact.js";

class App extends Component {
  render() {
    return (
    	<div>
    	<Landing />
      <ShowProjects />
      <Contact />
      </div>
    );
  }
}

export default App;

