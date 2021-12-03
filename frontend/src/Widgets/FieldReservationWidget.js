
import React from 'react';
import './FieldReservationWidget.css';

export default class FieldReservationWidget extends React.Component {

	//const API_URL_ICON = "http://openweathermap.org/img/wn/";

	constructor(props) {
		super(props);
		this.state = { 
			emoji: "test",
			text: "31°C",
			type: "default free"
		};
	}

	callAPI() {
		// on utilise la clef du prof parce que il a acces a daily
		// voir : https://openweathermap.org/faq#error401
		const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
		const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";

		fetch(`${API_URL}?lat=${this.props.position.lat}&lon=${this.props.position.lng}&appid=${API_KEY}&cnt=${this.props.cnt}&units=metric`)
			.then(res => res.json())
			.then(res => this.setState({
				emoji: res.list[parseInt(this.props.cnt)-1].weather[0].icon,
				text: res.list[parseInt(this.props.cnt)-1].temp.day,
			}));
	}

	componentWillMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="default" >{/* {this.state.type}> */}
				<p className="time">{this.props.time} : test</p>
				<br></br>
				<p className="text">{this.state.text}</p>
			</div>
		);
	}
}