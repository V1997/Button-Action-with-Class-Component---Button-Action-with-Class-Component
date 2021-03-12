import React, {Component, useState} from "react";
import '../styles/App.css';
import Para from "./Para";

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			text: '',
			visible: false
		}
		this.handleClick = this.handleClick.bind(this);

	};

	handleClick() {
		this.setState({visible: true});
	}

    render() {
		const { para, text } = this.state;
		// para === '' ? para: '';
    	return(
    		<div id="main">
				{	visible ? <Para /> : null		}
				<button onClick={this.handleClick} id="click">click</button>
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}

export default App;