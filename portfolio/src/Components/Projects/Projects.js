import React, {Component} from 'react';
import Fullstack from './Fullstack';
import Frontend from './Frontend';
import Mobile from './Mobile';
import './Projects.css';

class Projects extends Component {
	state = {
		mode: 'displayFS'
	}

  renderView(){
		if(this.state.mode === 'displayFS') {
      return (
        <Fullstack />
      )
    } else if(this.state.mode === 'displayFE') {
      return (
        <Frontend  />
      )
    } else if(this.state.mode === 'displayMobile') {
      return (
        <Mobile  />
      )
    }
  }

  fs = (event) =>{
  	this.setState({
  		mode: 'displayFS'
  	})
  }

  fe = (event) =>{
  	this.setState({
  		mode: 'displayFE'
  	})
  }

  mobile = (event) =>{
  	this.setState({
  		mode: 'displayMobile'
  	})
  }  

  render() {
    return (
      <section  id="projects">

      <div id="projButtons">
      <div className="btn blue"  onClick={this.fs}>Fullstack</div>      
      <div className="btn blue" onClick={this.fe}>Frontend</div>
      <div className="btn blue"  onClick={this.mobile}>Mobile</div>
      </div>

      <div>
        { this.renderView() }
      </div>
      </section>
    );
  }
}

export default Projects