import React from 'react';

export default class CallApi extends React.Component {

	constructor(props) {
		super(props);
		this.state = { apiResponse: "" };
	}

	callAPI() {
		var myHeaders = new Headers();
		myHeaders.append("X-Auth-Token","f9475c7dc1df466b965ffe2a72d2f4a7");

		var obj = {
			method: "GET",
			headers: myHeaders,
			mode: "cors",
			cache: "default"
		};

		
		fetch("https://api.football-data.org//v2/players/44", obj)
			.then(res => res.json())
			.then(res => this.setState({ apiResponse: res.name }));
	}

	componentDidMount() {
		this.callAPI();
	}

	render() {
		return (
			<p className="App-intro">{this.state.apiResponse}</p>
		);
	}
}