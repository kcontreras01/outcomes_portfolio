import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
    	<div className="NavBar">
        <div className="NavBarContainer">
          <div className="navItem grow" onClick={this.smoothScroll}><a href='#brandstatement'>About Me</a></div>
          <div className="navItem grow" onClick={this.onClickSmooth}><a href="#projButtons">Projects</a></div>
          <div className="navItem grow" onClick={this.onClickSmooth}><a href="#skills">Skills</a></div>
          <div className="navItem grow" onClick={this.onClickSmooth}><a href="#contact">Contact</a></div>
        </div>
      </div>
    );
  }
}

export default Nav;