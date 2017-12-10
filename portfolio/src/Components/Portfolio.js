import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import githired from "../images/githired.png";
import qwerty from "../images/qwerty.png";
import weatherapp from "../images/weatherapp.png";
import electron from "../images/electron.png";
import article from "../images/article.png";
import kiara from "../images/kiara.jpeg";
import match from "../images/match.png";
import busy from "../images/busy.png";
import news from "../images/news.png";
import brooklyn from "../images/brooklyn.png";
import FontAwesome from "react-fontawesome";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.landing = this.landing.bind(this);
		this.projects = this.projects.bind(this);
		this.contact = this.contact.bind(this);
		this.skills = this.skills.bind(this);
	}

	landing(props) {
		return (
			<section>
				<h1 className="logo">KIARA CONTRERAS</h1>
				<h2>Full Stack Web Developer</h2>
				<h3>New York</h3>
				<p>
					I’m intrigued by improving and crafting digital experiences. With the
					left side of my brain fueled by music and teaching yoga I have found
					that Web Development requires my perceptive nature, logical thinking,
					and resilience. I am passionate about creating technology with the
					user experience in mind and spend my free time exploring NYC.
				</p>
				<img id="me" src={kiara} />
				<p>This site was built with <span>&hearts;</span> and React</p>
			</section>
		);
	}

	projects(props) {
		return (
			<section>
			<figure>
			 		<a href="https://kcontreras01.github.io/brooklyn/" target="_blank"><img src={brooklyn} className="projects grow" /></a>
			 		<figcaption>
			 			Responsive online store demo site 
			 		</figcaption>
			</figure>
			<figure>			
			 		<a href="https://kcontreras01.github.io/responsive-news/" target="_blank"><img src={news} className="projects grow" /></a>
			 		<figcaption>
			 			Responsive News demo site
			 		</figcaption>
			</figure>			 		
			<figure>			
			 		<a href="https://kcontreras01.github.io/BusyHands/" target="_blank"><img src={busy} className="projects grow" /></a>
			 		<figcaption>
			 			Demo Frontend design site
			 		</figcaption>
			</figure>	
			<figure>						
					<a href="http://startup-matchmaker-kc.bitballoon.com/" target="_blank"><img src={match} className="projects grow" /></a>
			 		<figcaption>
						Demo Frontend design site
			 		</figcaption>
			</figure>	
			<figure>			
					<a href="http://electron-libre.surge.sh/" target="_blank"><img src={electron} className="projects grow" /></a>
			 		<figcaption>
			 			Create and save notes on your desktop. Full CRUD Express/React app hosted with Electron Framework
			 		</figcaption>
			</figure>	
			<figure>						
					<a href="http://githiredpotoo.surge.sh/" target="_blank"><img src={githired} className="projects grow" /></a>
			 		<figcaption>
						Job search management tool that lets users create a profile, search jobs, and save applications. GitHired App made with Express/React and GitHub Jobs API			 		</figcaption>
			</figure>	
			<figure>						
			 		<a href="https://savethatarticle.herokuapp.com/" target="_blank"><img src={article} className="projects grow" /></a>
			 		<figcaption>
						Save interesting articles from the NYTimes in a user profile. Built with Express, User Authentication, and NYTimes Article API			 		</figcaption>
			</figure>	
			<figure>						
			 		<a href="#" target="_blank"><img src={weatherapp} className="projects grow" /></a>
			 		<figcaption>
						Search locations, save weather widgets, and look at the week ahead. Worked alongside UX Developers to create a Weather App that is
						fully CRUD Express/React app			 		
					</figcaption>
			</figure>	
			</section>

			// <section className="project-container">
			// 	<div className="container">
			// 		<img src={brooklyn} className="projects" />
			// 			<div className="hold-text">
			// 				<p>Responsive online store site</p>
			// 				<p><a className="demo grow" target="_blank" href="https://kcontreras01.github.io/brooklyn/">Brook + Lyn</a></p>
			// 				<p><a className="demo grow" target="_blank" href="https://github.com/kcontreras01/brooklyn">Github</a></p>
			// 			</div>
			// 	</div>			
			// 	<div className="container">
			// 		<img src={news} className="projects" />
			// 			<div className="hold-text">
			// 				<p>Responsive News example site</p>
			// 				<p><a className="demo grow" target="_blank" href="https://kcontreras01.github.io/responsive-news/">ECon News</a></p>
			// 				<p><a className="demo grow" target="_blank" href="https://github.com/kcontreras01/responsive-news">Github</a></p>
			// 			</div>
			// 	</div>				
			// 	<div className="container">
			// 		<img src={busy} className="projects" />
			// 			<div className="hold-text">
			// 				<p>Demo Frontend design example</p>
			// 				<p><a className="demo grow" target="_blank" href="https://kcontreras01.github.io/BusyHands/">Busy Hands</a></p>
			// 				<p><a className="demo grow" target="_blank" href="https://github.com/kcontreras01/BusyHands">Github</a></p>
			// 			</div>
			// 	</div>				
			// 	<div className="container">
			// 		<img src={match} className="projects" />
			// 			<div className="hold-text">
			// 				<p>Frontend design example built for business in mind</p>
			// 				<p><a className="demo grow" target="_blank" href="http://startup-matchmaker-kc.bitballoon.com/">Startup Matchmaker</a></p>
			// 				<p><a className="demo grow" target="_blank" href="https://github.com/kcontreras01/StartupMatchmaker">Github</a></p>
			// 			</div>
			// 	</div>			
			// 	<div className="container">
			// 		<img src={electron} className="projects" />
			// 		<div className="hold-text">
			// 				<p>Create and save notes on your desktop. Full CRUD Express/React app hosted with Electron Framework</p>
			// 				<p><a className="demo grow" target="_blank" href="http://electron-libre.surge.sh/">Noted.</a></p>
			// 				<p><a className="demo grow" target="_blank" href="https://github.com/electron-WDI">Github</a></p>
			// 			</div>
			// 	</div>

			// 	<div className="container">
			// 		<img src={githired} className="projects image" />
			// 		<div className="hold-text">
			// 				<p>Job search management tool that lets users create a profile, search jobs, and save applications. GitHired App made with Express/React and GitHub Jobs API</p>
			// 				<p><a className="demo grow" target="_blank" href="http://githiredpotoo.surge.sh/">GitHired</a></p>
			// 				<p><a className="demo grow" target="_blank" href="https://github.com/rohara-gleveline">Github</a></p>
			// 		</div>
			// 	</div>
			// 	<div className="container">
			// 		<img src={article} className="projects image" />
			// 		<div className="hold-text">
			// 				<p>Save interesting articles from the NYTimes in a user profile. Built with Express, User Authentication, and NYTimes Article API</p>
			// 				<p><a className="demo grow" target="_blank" href="https://savethatarticle.herokuapp.com/">Save That Article</a></p>
			// 		</div>
			// 	</div>
			// 	<div className="container">
			// 		<img src={weatherapp} className="projects" />
			// 		<div className="hold-text">
			// 				<p>Search locations, save weather widgets, and look at the week ahead. Worked alongside UX Developers to create a Weather App that is
			// 				fully CRUD Express/React app</p>
			// 		</div>
			// 	</div>
			/*	<div className="container">
								<img src={qwerty} className="projects" />
								<div className="hold-text">
										<p>Text-based adventure game about Qwerty the Cat completed with
										multiple endings. Built with HTML, CSS, Javascript, and jQuery.</p>
										<p><a className="demo grow" href="qwerty-kpc.bitballoon.com">Qwerty</a></p>
								</div>
							</div>*/
			// </section>
		);
	}

	skills(props) {
		return (
			<div>
				<section>
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
			</div>
		);
	}

	contact(props) {
		return (
			<section>
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

	render() {
		const redir = <Redirect to="/aboutme" />;
		//const redir = <p>flarp</p>;
		return (
			<div>
				<nav>
					<ul>
						<li className='grow'>
							<Link to="/aboutme">About Me</Link>
						</li>
						<li className='grow'>
							<Link to="/projects">Projects</Link>
						</li>
						<li className='grow'>
							<Link to="/skills">Skills</Link>
						</li>
						<li className='grow'>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<Route exact path="/" render={() => redir} />
				<Route path="/aboutme" render={this.landing} />
				<Route path="/skills" render={this.skills} />
				<Route path="/projects" render={this.projects} />
				<Route path="/contact" render={this.contact} />
			</div>
		);
	}
}

export default Portfolio;
