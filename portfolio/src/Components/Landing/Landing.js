import React, { Component } from "react";
import './Landing.css'
import Typing from 'react-typing-animation';

class Landing extends Component {
  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

	render() {
		return (
			<section className="landing">
			<Typing>
			  <Typing.Delay ms={500} />
        <h1>HI! <Typing.Delay ms={900} />I'M KIARA.</h1>
      </Typing>
      <div id="landing-div">
        <p>I'm a passionate Full Stack Developer from NYC. </p>
        <p>Thanks for stopping by. Check out some of my most recent work below.
				<i className="fas fa-level-down-alt jump"></i></p>
			</div>
      </section>
		);
	}
}

export default Landing;
