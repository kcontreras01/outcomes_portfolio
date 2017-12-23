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
			<section id="landing" className="page">
			<div className="intro">
				<h1 className="logo">KIARA CONTRERAS</h1>
				<h2>Full Stack Web Developer</h2>
				<h3>New York</h3>
			</div>

			<a href='#brandstatement'>

			<svg className="arrows" onClick={this.smoothScroll}>
							<path className="a1" d="M0 0 L30 32 L60 0"></path>							
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
												</a>

			</section>
		);
	}
}

export default Landing;
