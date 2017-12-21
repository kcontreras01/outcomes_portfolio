import React, {Component} from 'react';

class Contact extends Component {
	render(){
		return(
			<section className="Contact">
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
			</section>
		);
	}
}

export default Contact