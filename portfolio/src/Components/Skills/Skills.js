import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component {
	render(){
		return(
			<section id="skills" className="page">
					<div className="skills-box">
						<div className="skills">
						<h6>Frontend</h6>
							<p>
								<span className="devicons devicons-html5 grow"></span>
									<span className="devicons devicons-css3 grow"></span>
									<span className="devicons devicons-javascript grow"></span>
								<span className="devicons devicons-jquery grow"></span>
							<span className="devicons devicons-react grow"></span>
							<p className="grow">ES6</p>		
							</p>				
						</div>

						<div className="skills">
								<h6>Backend</h6>
							<p>
									<span className="devicons devicons-nodejs grow"></span>
									<span className="devicons devicons-ruby_on_rails grow"></span>
								<span className="devicons devicons-postgresql grow"></span>	
								<p className="grow">express</p>			
								</p>
							</div>


						<div className="skills">
								<h6>Tools</h6>
							<p>
								<span className="devicons devicons-git grow"></span>
								<span className="devicons devicons-github_alt grow"></span>
								<span className="devicons devicons-heroku grow"></span>
								<span className="devicons devicons-trello grow"></span>
							</p>
							</div>

						<div className="skills">
								<h6>Certifications</h6>
							<p>
								<p className="grow">ACiT</p>
								<p className="grow">ACMT</p>
							</p>
							</div>							

					</div>
				</section>
			)
	}
}

export default Skills