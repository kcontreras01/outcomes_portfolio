import React, { Component } from "react";

class Landing extends Component {
	render() {
		return (
			<section className="Landing page">
			<div className="intro">
				<h1 className="logo">KIARA CONTRERAS</h1>
				<h2>Full Stack Web Developer</h2>
				<h3>New York</h3>
			</div>

			<svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
						
			</section>
		);
	}
}

export default Landing;
