import React, {Component} from 'react';
import githired from "../../images/githired.png";
import match from "../../images/match.png";
import notes from "../../images/electron.png";
import bk from '../../images/brooklyn.png';
import Zoom from 'react-reveal/Zoom';
import AnimateHeight from 'react-animate-height';
import './Projects.css';

class ShowProjects extends Component {
  constructor() {
    super();
    this.state = {
    	showBK: false,
    	showGH: false,
    	showNT: false,
    	showMT: false,
      heightBK: 0,
      heightGH: 0,
      heightNT: 0,
      heightMT: 0,
    }

    this.showMeBK = this.showMeBK.bind(this);
    this.showMeGH = this.showMeGH.bind(this);
    this.showMeNT = this.showMeNT.bind(this);
    this.showMeMT = this.showMeMT.bind(this);
  }

  showMeBK = () => {
  	this.setState({showBK: !this.state.showBK, heightBK: this.state.heightBK === 0 ? 200 : 0})
  }  
  showMeGH = () => {
  	this.setState({showGH: !this.state.showGH, heightGH: this.state.heightGH === 0 ? 300 : 0})
  }  
  showMeNT = () => {
  	this.setState({showNT: !this.state.showNT, heightNT: this.state.heightNT === 0 ? 300 : 0})
  }  
  showMeMT = () => {
  	this.setState({showMT: !this.state.showMT, heightMT: this.state.heightMT === 0 ? 300 : 0})
  }

	render(){
		return(
				<section>
          <Zoom><img alt="brooklyn" src={bk} className="boxes" onClick={this.showMeBK}/></Zoom>
              <AnimateHeight duration={800} height={this.state.heightBK}>
                <div>
                	{ this.state.showBK ? 

        	          	<div>
        								<p>Brooklyn responsive blog demo site </p>
        								<p>Built with: HTML, CSS, and Javascript</p>														
        								<a href="https://kcontreras01.github.io/brooklyn/" className="btn raise" target="_blank" rel="noopener noreferrer">Demo</a>
        								<a href="https://github.com/kcontreras01/brooklyn" className="btn raise">Github</a>
        							</div> 
                     : null
      						}
                </div>
              </AnimateHeight>

          <Zoom><img alt="githired" src={githired} className="boxes" onClick={this.showMeGH}/></Zoom>
            <AnimateHeight duration={800} height={this.state.heightGH}>
              <div>
                { this.state.showGH ? 
      	          	<div>
      								<p>Job search management tool that lets users create a profile, search jobs, and save applications.</p>
      								<p>Built with: Express, React, and GitHub Jobs API</p>							
      								<a href="http://githiredpotoo.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
      								<a href="https://github.com/rohara-gleveline" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
      							</div> : null
      					}
              </div>
            </AnimateHeight>
          <Zoom><img alt="match" src={match} className="boxes" onClick={this.showMeMT}/></Zoom>
            <AnimateHeight duration={800} height={this.state.heightMT}>
              <div>
              	{ this.state.showMT ?
              		<div>
    								<p>StartupMatchmaker demo business site with Frontend design</p>
    								<p>Built with: HTML, CSS, and Javascript</p>														
    								<a href="http://startup-matchmaker-kc.bitballoon.com/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
    								<a href="https://github.com/kcontreras01/week8" className="btn blue" >Github</a>
    							</div> : null
              	}
              </div>
            </AnimateHeight>  
          <Zoom><img alt="notes" src={notes} className="boxes" onClick={this.showMeNT}/></Zoom>
            <AnimateHeight duration={800} height={this.state.heightNT}>
              <div>
              	{ this.state.showNT ?
              		<div>
    								<p>Fully CRUD Note creation app where user can create and save notes on their desktop.</p>
    								<p>Built with: Express, React, and Electron</p>							
    								<a href="http://electron-libre.surge.sh/"  className="btn blue" target="_blank" rel="noopener noreferrer">Demo</a>
    								<a href="https://github.com/electron-WDI" className="btn blue" target="_blank" rel="noopener noreferrer">GitHub</a>
    							</div> : null
              	}
              </div>
            </AnimateHeight>  
				</section>
			)
	}
}

export default ShowProjects