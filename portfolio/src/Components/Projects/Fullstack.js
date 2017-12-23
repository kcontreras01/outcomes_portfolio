import React, {Component} from 'react';
import githired from "../../images/githired.gif";
// import weatherapp from "../images/weatherapp.png";
import electron from "../../images/electron.png";
import articles from "../../images/articles.gif";
import './Projects.css';

class Fullstack extends Component {
	render(){
		return(
				<section id="projects">
						<h4>Fullstack</h4>			
					<section className="project-container">
					<div className="proj">
						<div className="projDesc">
							<p>Search NYTimes articles with keywords</p>
							<p>Built with: Express, React, and NYTimes Article API</p>
							<a href="http://articles.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/kcontreras01/ReactArticles" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub (React)</a>
							<a href="https://github.com/kcontreras01/ExpressArticles" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub (Express)</a>
					</div>				
									<img src={articles} className="projects" />
					</div>	
<div className="proj">
						<div className="projDesc">
							<p>Create and save notes on your desktop.</p>
							<p>Built with: Express, React, and Electron</p>							
							<a href="http://electron-libre.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/electron-WDI" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					</div>				
									<img src={electron} className="projects" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>Job search management tool that lets users create a profile, search jobs, and save applications. GitHired App made with Express/React and GitHub Jobs API</p>
							<p>Built with: Express, React, and GitHub Jobs API</p>							
							<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/rohara-gleveline" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					</div>				
							<img src={githired} className="projects" />
					</div>	
			</section>
			</section>
			)
	}
}

export default Fullstack