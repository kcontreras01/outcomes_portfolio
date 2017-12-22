import React, {Component} from 'react';
import Fullstack from './Fullstack';
import Frontend from './Frontend';
import Mobile from './Mobile';

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
      <div className="App">
      <button onClick={this.fe}>FE</button>
      <button onClick={this.fs}>FS</button>
      <button onClick={this.mobile}>Mobile</button>

        { this.renderView() }
      </div>
    );
  }
}

export default Projects