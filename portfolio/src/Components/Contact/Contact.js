import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <footer>
          <div><a href="mailto:kiara.p.contreras@gmail.com"><i className="far fa-envelope"></i></a></div>
          <div><a href="https://github.com/kcontreras01"><i className="fab fa-github-alt"></i></a></div>
          <div><a href="https://www.linkedin.com/in/kiaracontreras/"><i className="fab fa-linkedin-in"></i></a></div>
        </footer>      
    );
  }
}

export default Contact;
