import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
	render(){
		return(
			<section id="contact" >
				<div className="contact">
					<h2>Get in touch</h2>
					<div className="contact-links">
						<p className="grow">
							<a href="mailto: kcontreras01@gmail.com">Email</a>
						</p>
						<p className="grow">
							<a href="https://www.linkedin.com/in/kiara-contreras/">
								Linkedin
							</a>
						</p>
						<p className="grow">
							<a href="https://github.com/kcontreras01">GitHub</a>
						</p>
						<p className="grow">
							<a href="https://codepen.io/kpcontreras/">Codepen</a>
						</p>
					</div>
				</div>

								<footer>
					<p>
						This site was built with <span>&hearts;</span> and React
					</p>
					<p>Code for this site is available <a href="https://github.com/kcontreras01/outcomes_portfolio" target="_blank" rel="noopener noreferrer">here</a></p>
				</footer>

			</section>
		);
	}
}

export default Contact