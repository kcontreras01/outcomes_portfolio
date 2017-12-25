import React, {Component} from 'react';
import kiara from "../../images/kiara.jpeg";
import './BrandStatement.css';

class BrandStatement extends Component {
	render(){
		return (
			<div>
			<section id="brandstatement">
				<p className="brandParagraph">
					I’m intrigued by improving and crafting digital experiences. With the
					left side of my brain fueled by music and teaching yoga I have found
					that Web Development requires my perceptive nature, logical thinking,
					and resilience. I am passionate about creating technology with the
					user experience in mind and spend my free time exploring NYC.
				</p>
				<img id="me" src={kiara} />
			</section>
			</div>
			)
	}
}
export default BrandStatement;