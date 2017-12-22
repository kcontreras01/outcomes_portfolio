import React, {Component} from 'react';
import githired from "../images/githired.png";
import weatherapp from "../images/weatherapp.png";
import electron from "../images/electron.png";
import article from "../images/article.png";
import match from "../images/match.png";
import busy from "../images/busy.png";
import news from "../images/news.png";
import brooklyn from "../images/brooklyn.png";

class Projects extends Component {
	render(){
		return(
			<div>
			<section className="Projects">
					<h4>Projects</h4>			
				<section className="project-container">
				<div className="proj">
					<div className="projDesc">
						<p>Responsive online store demo site </p>
						<button className="projButton"><a href="https://kcontreras01.github.io/brooklyn/" target="_blank" rel="noopener noreferrer">Demo</a></button>
						<button className="projButton"><a href="#">Github</a></button>
					</div>				
						<img src={brooklyn} className="projects grow" />
				</div>
			<div className="proj">
					<div className="projDesc">
						<p>Responsive News demo site</p>
						<button className="projButton"><a href="https://kcontreras01.github.io/responsive-news/" target="_blank" rel="noopener noreferrer">Demo</a></button>
						<button className="projButton"><a href="https://github.com/kcontreras01/responsive-news">Github</a></button>
					</div>				
						<img src={news} className="projects grow" />
				</div>	
			<div className="proj">
					<div className="projDesc">
						<p>Demo Frontend design site</p>
						<button className="projButton"><a href="https://kcontreras01.github.io/BusyHands/" target="_blank" rel="noopener noreferrer">Demo</a></button>
						<button className="projButton"><a href="https://github.com/kcontreras01/BusyHands">Github</a></button>
					</div>				
						 		<img src={busy} className="projects grow" />
				</div>	
			<div className="proj">
					<div className="projDesc">
						<p>Demo Frontend design site</p>
						<button className="projButton"><a href="http://startup-matchmaker-kc.bitballoon.com/" target="_blank" rel="noopener noreferrer">Demo</a></button>
						<button className="projButton"><a href="https://github.com/kcontreras01/week8">Github</a></button>
					</div>				
								<img src={match} className="projects grow" />
				</div>	
			<div className="proj">
					<div className="projDesc">
						<p>Create and save notes on your desktop. Full CRUD Express/React app hosted with Electron Framework</p>
						<button className="projButton"><a href="http://electron-libre.surge.sh/" target="_blank" rel="noopener noreferrer">Demo</a></button>
{/*						<button className="projButton"><a href="#">Github</a></button>
					*/}					</div>				
								<img src={electron} className="projects grow" />
				</div>	
			<div className="proj">
					<div className="projDesc">
						<p>Job search management tool that lets users create a profile, search jobs, and save applications. GitHired App made with Express/React and GitHub Jobs API</p>
						<button className="projButton"><a href="http://githiredpotoo.surge.sh/" target="_blank" rel="noopener noreferrer">Demo</a></button>
{/*						<button className="projButton"><a href="#">Github</a></button>
					*/}					</div>				
						<img src={githired} className="projects grow" />
				</div>	

			{/*
					
						<figure>						
								<a href="http://githiredpotoo.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={githired} className="projects grow" /></a>
						 		<figcaption>
									Job search management tool that lets users create a profile, search jobs, and save applications. GitHired App made with Express/React and GitHub Jobs API			 		</figcaption>
						</figure>	
						<figure>						
						 		<a href="https://savethatarticle.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={article} className="projects grow" /></a>
						 		<figcaption>
									Save interesting articles from the NYTimes in a user profile. Built with Express, User Authentication, and NYTimes Article API			 		</figcaption>
						</figure>	
						<figure>						
						 		<a href="#" target="_blank" rel="noopener noreferrer"><img src={weatherapp} className="projects grow" /></a>
						 		<figcaption>
									Search locations, save weather widgets, and look at the week ahead. Worked alongside UX Developers to create a Weather App that is
									fully CRUD Express/React app			 		
								</figcaption>
						</figure>	*/}
			</section>
			</section>
			</div>
			);
	}
}

export default Projects