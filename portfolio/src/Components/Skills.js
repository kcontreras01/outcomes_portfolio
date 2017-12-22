import React, {Component} from 'react';

class Skills extends Component {
	render(){
		return(
			<section className="Skills page">
					<h4>Skills</h4>
					<div className="skills-box">

						<div className="skills">
							<p className="grow">
								<a href="https://reactjs.org/" target="_blank">React</a>
							</p>
							<p className="grow">
								<a href="https://www.javascript.com/" target="_blank">Javascript</a>
							</p>
							<p className="grow">
								<a href="https://jqueryui.com/" target="_blank">jQuery</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/html/" target="_blank">HTML</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/css/css_intro.asp" target="_blank">CSS</a>
							</p>
						</div>

						<div className="skills">
							<p className="grow">
								<a href="https://expressjs.com/" target="_blank">Express</a>
							</p>
							<p className="grow">
								<a href="https://nodejs.org/en/" target="_blank">Node.js</a>
							</p>
							<p className="grow">
								<a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">
									MVC
								</a>
							</p>
							<p className="grow">
								<a href="https://electron.atom.io/" target="_blank">Electron</a>
							</p>
							<p className="grow">
								<a href="https://angular.io/" target="_blank">Angular</a>
							</p>
						</div>

						<div className="skills">
							<p className="grow">
								<a href="https://angular.io/" target="_blank">Ruby</a>
							</p>
							<p className="grow">
								<a href="http://rubyonrails.org/" target="_blank">Rails</a>
							</p>
							<p className="grow">
								<a href="#">RESTful APIs</a>
							</p>
							<p className="grow">
								<a href="http://es6-features.org/#Constants" target="_blank">ES6</a>
							</p>
							<p className="grow">
								<a href="https://www.w3schools.com/sql/" target="_blank">SQL | PSQL</a>
							</p>
						</div>
					</div>
				</section>
			)
	}
}

export default Skills