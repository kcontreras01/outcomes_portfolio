import React, {Component} from 'react';
import './Skills.css'

class Skills extends Component {
	render(){
		return(
			<section id="skills" className="page">
					<h4>Skills</h4>
					<div className="skills-box">

						<div className="skills">
							<p className="grow">
								<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
							</p>
							<p className="grow">
								<a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">Javascript</a>
							</p>
							<p className="grow">
								<a href="https://jqueryui.com/" target="_blank" rel="noopener noreferrer">jQuery</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">HTML</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer">CSS</a>
							</p>
						</div>

						<div className="skills">
							<p className="grow">
								<a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</a>
							</p>
							<p className="grow">
								<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a>
							</p>
							<p className="grow">
								<a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" rel="noopener noreferrer">
									MVC
								</a>
							</p>
							<p className="grow">
								<a href="https://electron.atom.io/" target="_blank" rel="noopener noreferrer">Electron</a>
							</p>
							<p className="grow">
								<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a>
							</p>
						</div>

						<div className="skills">
							<p className="grow">
								<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Ruby</a>
							</p>
							<p className="grow">
								<a href="http://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Rails</a>
							</p>
							<p className="grow">
								<a href="#">RESTful APIs</a>
							</p>
							<p className="grow">
								<a href="http://es6-features.org/#Constants" target="_blank" rel="noopener noreferrer">ES6</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">SQL | PSQL</a>
							</p>
						</div>
					</div>
				</section>
			)
	}
}

export default Skills