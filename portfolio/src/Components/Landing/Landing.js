import React, { Component } from "react";
import './Landing.css'
import Typing from 'react-typing-animation';

class Landing extends Component {
  constructor() {
    super();
      this.state = {
        render: false
    }
  }

  componentDidMount() {
    setTimeout(() => { 
        this.setState({render: true}) 
    }, 3000)
  }

	render() {
		return (
      <section>
			<Typing>
			  <Typing.Delay ms={500} />
        <h1>Hi! <Typing.Delay ms={900} />I'm Kiara.</h1>
      </Typing>
      
        { this.state.render ? 
          <div className="fadeIn">
            <p>I'm a passionate Full Stack Developer from NYC. </p>
            <p>Thanks for stopping by. Check out some of my work below.</p>
    			</div> : null
        }
      
      </section>
		);
	}
}

export default Landing;
