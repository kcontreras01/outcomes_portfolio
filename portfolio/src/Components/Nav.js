import React, { Component } from "react";
// import	BrandStatement from 'BrandStatement';
// var smoothScroll = require('smoothscroll');

class Nav extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = event => {
		event.preventDefault();
		console.log("clicked");
	};
	render() {
		// const redir = <Redirect to="/aboutme" />;
		//const redir = <p>flarp</p>;

		return (
			<section className="Nav">
				<nav>
					<ul>
						<li className="grow" onClick={this.handleClick}>
							About Me
						</li>
						<li className="grow">Projects</li>
						<li className="grow">Skills</li>
						<li className="grow">Contact</li>
					</ul>
				</nav>
			</section>
		);
	}
}

export default Nav;
