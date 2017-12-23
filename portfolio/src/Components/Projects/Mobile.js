import React, {Component} from 'react';
import beers from "../../images/beers.gif";
import kindle from "../../images/kindle.gif"
import magic8 from "../../images/magic8.gif"
import './Projects.css';


class Mobile extends Component {
	render(){
		return(
				<section id="projects">
						<h4>Mobile</h4>			
					<section className="project-container">
						<div className="proj">
						<div className="projDesc">
							<p>Beers search app using BreweryDB API</p>
{/*							<a href="https://github.com/kcontreras01/beers"  className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					*/}					</div>				
									<img src={beers} className="mobile" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>Kindle app layout with books and scrolling pages</p>
{/*							<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					*/}					</div>				
							<img src={kindle} className="mobile" />
					</div>	
				<div className="proj">
						<div className="projDesc">
							<p>Magic 8 Ball app with responsive button and motion</p>
{/*							<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
					*/}					</div>				
							<img src={magic8} className="mobile" />
					</div>						
			</section>
			</section>
			)
	}
}

export default Mobile