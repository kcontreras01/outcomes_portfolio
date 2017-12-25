import React, {Component} from 'react';
import githired from "../../images/githired.gif";
// import weatherapp from "../images/weatherapp.png";
import electron from "../../images/electron.png";
import articles from "../../images/articles.gif";
import './Projects.css';

class Fullstack extends Component {
	render(){
		return(
				<section>
						<h4>Fullstack</h4>			
					<section className="project-container">
					<div className="proj">
						<div className="projDesc">
							<p>Fully CRUD Article search application where user can create account, search by keyword, and save/edit their articles.</p>
							<p>Built with: Express, React, and NYTimes Article API</p>
							<a href="http://articles.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/kcontreras01/ReactArticles" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					</div>				
									<img src={articles} className="projectImages" />
					</div>	
					
					<div className="proj">
						<div className="projDesc">
							<p>Fully CRUD Note creation app where user can create and save notes on their desktop.</p>
							<p>Built with: Express, React, and Electron</p>							
							<a href="http://electron-libre.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/electron-WDI" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					</div>				
									<img src={electron} className="projectImages" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>Job search management tool that lets users create a profile, search jobs, and save applications.</p>
							<p>Built with: Express, React, and GitHub Jobs API</p>							
							<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/rohara-gleveline" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					</div>				
							<img src={githired} className="projectImages" />
					</div>	
			</section>
			</section>
			)
	}
}

export default Fullstack