import React, {Component, useState} from "react";
import '../styles/App.css';
import Para from "./Para";

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
 			visible: false
		}
		this.handleClick = this.handleClick.bind(this);

	};

	handleClick() {
		this.setState({visible: true});
	}

    render() {
      	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{	this.state.visible ? <Para /> : ''		}
				<button onClick={this.handleClick} id="click">click</button>
    		</div>
    	);
    }
}

export default App;