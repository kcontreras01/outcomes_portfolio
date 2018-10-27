import React, {Component} from 'react';
import githired from "../../images/githired.png";
import match from "../../images/match.png";
import notes from "../../images/electron.png";
import bk from '../../images/brooklyn.png';
import './Projects.css';

class ShowProjects extends Component {
  constructor() {
    super();
    this.state = {
    	showBK: false,
    	showGH: false,
    	showNT: false,
    	showMT: false,
    }

    this.showMeBK = this.showMeBK.bind(this);
    this.showMeGH = this.showMeGH.bind(this);
    this.showMeNT = this.showMeNT.bind(this);
    this.showMeMT = this.showMeMT.bind(this);
  }

  showMeBK = () => {
  	this.setState({showBK: !this.state.showBK})
  }  
  showMeGH = () => {
  	this.setState({showGH: !this.state.showGH})
  }  
  showMeNT = () => {
  	this.setState({showNT: !this.state.showNT})
  }  
  showMeMT = () => {
  	this.setState({showMT: !this.state.showMT})
  }

	render(){
		return(
				<section>
          <img alt="brooklyn" src={bk} className="boxes" onClick={this.showMeBK}/>
          	{ this.state.showBK ? 
	          	<section>
								<p>Brooklyn responsive blog demo site </p>
								<p>Built with: HTML, CSS, and Javascript</p>														
								<a href="https://kcontreras01.github.io/brooklyn/" className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
								<a href="https://github.com/kcontreras01/brooklyn" className="btn blue">Github</a>
							</section> : null
						}

          <img alt="githired" src={githired} className="boxes" onClick={this.showMeGH}/>
          { this.state.showGH ? 
	          	<section>
								<p>Job search management tool that lets users create a profile, search jobs, and save applications.</p>
								<p>Built with: Express, React, and GitHub Jobs API</p>							
								<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
								<a href="https://github.com/rohara-gleveline" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
							</section> : null
						}
          <img alt="match" src={match} className="boxes" onClick={this.showMeMT}/>
          	{ this.state.showMT ?
          		<section className="projDesc">
								<p>StartupMatchmaker demo business site with Frontend design</p>
								<p>Built with: HTML, CSS, and Javascript</p>														
								<a href="http://startup-matchmaker-kc.bitballoon.com/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
								<a href="https://github.com/kcontreras01/week8" className="btn blue" >Github</a>
							</section> : null
          	}
          <img alt="notes" src={notes} className="boxes" onClick={this.showMeNT}/>
          	{ this.state.showNT ?
          		<section className="projDesc">
								<p>Fully CRUD Note creation app where user can create and save notes on their desktop.</p>
								<p>Built with: Express, React, and Electron</p>							
								<a href="http://electron-libre.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
								<a href="https://github.com/electron-WDI" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
							</section> : null
          	}

				</section>
			)
	}
}

export default ShowProjects