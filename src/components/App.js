import React, {Component, useState} from "react";
import '../styles/App.css';
import Para from "./Para";

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.handleClick = this.handleClick.bind(this);

	};

	handleClick() {
		this.setState({text: 'Hello, I\'ve learnt to use the full-stack evaluation tool. This makes me so happy'});
	}

    render() {
		const { para, text } = this.state;
		// para === '' ? para: '';
    	return(
    		<div id="main">
				<Para paraText={text}/>
				<button onClick={this.handleClick} id="click">click</button>
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

