import React, {Component} from 'react';
import githired from "../images/githired.png";
import weatherapp from "../images/weatherapp.png";
import electron from "../images/electron.png";

class Fullstack extends Component {
	render(){
		return(
							<section className="Projects">
						<h4>Fullstack</h4>			
					<section className="project-container">
<div className="proj">
						<div className="projDesc">
							<p>Create and save notes on your desktop. Full CRUD Express/React app hosted with Electron Framework</p>
							<a href="http://electron-libre.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
					</div>				
									<img src={electron} className="projects" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>Job search management tool that lets users create a profile, search jobs, and save applications. GitHired App made with Express/React and GitHub Jobs API</p>
							<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
					</div>				
							<img src={githired} className="projects" />
					</div>	
			</section>
			</section>
			)
	}
}

export default Fullstack