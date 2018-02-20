import React, { Component } from "react";
import "./App.css";

class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {
			shakespare: ""
		}
	}

	componentDidMount() {
		var base= this

		let poemApi = "http://ShakeItSpeare.com/api/poem"
		fetch(poemApi)
		.then((response) => {
			return response.json()
		}).then((json) => {
			base.setState({shakeSpeare: json.poem});
		}).catch((ex) => {
			console.log("An error occured while parsing! ohh nooo", ex );
		})
	}
	render() {
		let poetry = this.state.shakeSpeare;
		if(!this) {
    		return (
    			<div>
    				<h1>Loading....</h1>
    			</div>
    			)
    	}
    return (

    	<div>
    		<h1>This is my fav ShakeSpeare poem:</h1>
    		{poetry}
    	</div>

    );
  }
}

export default Home;