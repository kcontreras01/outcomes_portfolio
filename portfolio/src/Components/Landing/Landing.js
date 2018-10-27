import React, { Component } from "react";
import './Landing.css'

class Landing extends Component {
  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

			// <div className="intro">
			// 	<h1 className="logo">KIARA CONTRERAS</h1>
			// 	<h2>Full Stack Web Developer</h2>
			// 	<h3>New York</h3>
			// </div>
	render() {
		return (
			// <section id="landing">


			<section className="landing">
        <h1>Hi! I'm Kiara.</h1>
        <p>I'm a passionate Full Stack Developer from NYC. </p>
        <p>Thanks for stopping by. Check out some of my most recent work below.
				<i className="fas fa-level-down-alt jump"></i></p>
      </section>  



			// </section>
		);
	}
}

export default Landing;
