import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			para: ''
		}
		this.handleClick = this.handleClick.bind(this);

	};

	handleClick() {
		this.state.para === '' ? this.setState({para: 'Hello, I\'ve learnt to use the full-stack evaluation tool. This makes me so happy'}) : this.setState({para: ''});
	}

    render() {
		const { para } = this.state;
		// para === '' ? para: '';
    	return(
    		<div id="main">
				<p id="para">{para}</p>
				<button onClick={this.handleClick} id="click">click</button>
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

