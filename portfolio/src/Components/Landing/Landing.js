import React, { Component } from "react";
import './Landing.css'

class Landing extends Component {
  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

	render() {
		return (
			<section id="landing">
			<div className="intro">
				<h1 className="logo">KIARA CONTRERAS</h1>
				<h2>Full Stack Web Developer</h2>
				<h3>New York</h3>
			</div>



			</section>
		);
	}
}

export default Landing;
