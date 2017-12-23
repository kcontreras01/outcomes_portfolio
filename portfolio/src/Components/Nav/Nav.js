// import React, { Component } from "react";
// import './Nav.css';
// // import zenscroll from 'zenscroll';
// // import	BrandStatement from '../BrandStatement/BrandStatement';
// // var smoothScroll = require('smoothscroll');

// class Nav extends Component {
// 	constructor(props) {
// 		super(props);

// 		// this.handleClick = this.handleClick.bind(this);
// 	}

// 	// handleClick = event => {
// 	// 	let brand = document.getElementsByClassName('BrandStatement')
// 	// 	zenscroll.intoView(brand)
// 	// };
// 	render() {
// 		// const redir = <Redirect to="/aboutme" />;
// 		//const redir = <p>flarp</p>;

// 		return (
// 			<section className="Nav">
// 				<nav>
// 					<ul>
// 						<li className="grow about">
// 							About Me
// 						</li>
// 						<li className="grow">Projects</li>
// 						<li className="grow">Skills</li>
// 						<li className="grow">Contact</li>
// 					</ul>
// 				</nav>
// 			</section>
// 		);
// 	}
// }

// export default Nav;


import React, { Component } from 'react';

class Nav extends Component {
  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
        <div className="NavBarContainer">
          <div className="navItem" onClick={this.smoothScroll}><a href='#brandstatement'>about me</a></div>
          <div className="navItem" onClick={this.onClickSmooth}><a href="#projects">Projects</a></div>
          <div className="navItem" onClick={this.onClickSmooth}><a href="#skills">Skills</a></div>
          <div className="navItem" onClick={this.onClickSmooth}><a href="#contact">Contact</a></div>
        </div>
    );
  }
}

export default Nav;