import React, {Component} from 'react';
import match from "../../images/match.png";
import busy from "../../images/busy.png";
import news from "../../images/news.png";
import brooklyn from "../../images/brooklyn.png";
import './Projects.css';


class Frontend extends Component {
	render(){
		return(
				<section>
						<h4>Frontend</h4>			
					<section className="project-container">
					<div className="proj">
						<div className="projDesc">
							<p>Brooklyn responsive blog demo site </p>
							<p>Built with: HTML, CSS, and Javascript</p>														
							<a href="https://kcontreras01.github.io/brooklyn/" className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="#" className="btn blue">Github</a>
						</div>				
							<img src={brooklyn} className="projects" />
					</div>
				<div className="proj">
						<div className="projDesc">
							<p>Responsive News demo site using Flexbox</p>
							<p>Built with: HTML, CSS, and Javascript</p>														
							<a href="https://kcontreras01.github.io/responsive-news/"  className="btn blue"target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/kcontreras01/responsive-news" className="btn blue">Github</a>
						</div>				
							<img src={news} className="projects" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>BusyHands demo Frontend design site</p>
							<p>Built with: HTML, CSS, and Javascript</p>							
							<a href="https://kcontreras01.github.io/BusyHands/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/kcontreras01/BusyHands" className="btn blue" >Github</a>
						</div>				
							 		<img src={busy} className="projects" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>StartupMatchmaker demo business site with Frontend design</p>
							<p>Built with: HTML, CSS, and Javascript</p>														
							<a href="http://startup-matchmaker-kc.bitballoon.com/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
							<a href="https://github.com/kcontreras01/week8" className="btn blue" >Github</a>
						</div>				
									<img src={match} className="projects" />
					</div>	
					</section>

					</section>
			)
	}
}

export default Frontend