import React, {Component} from 'react';
// var smoothScroll = require('smoothscroll');

class Nav extends Component {
		render() {
		// const redir = <Redirect to="/aboutme" />;
		//const redir = <p>flarp</p>;
		return (
			<section className="Nav">
				<nav>
					<ul>
						<li className='grow'>About Me</li>
						<li className='grow'>Projects</li>
						<li className='grow'>Skills</li>
						<li className='grow'>Contact</li>
					</ul>
				</nav>
			</section>
			)
}
}

export default Nav;