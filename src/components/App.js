import React, {Component, useState} from "react";
import '../styles/App.css';
import Welcome from "./Welcome";

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				<Welcome greeting="vasu"/>
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

