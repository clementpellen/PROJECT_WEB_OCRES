
import React from 'react';
import './FieldReservationWidget.css';

export default class FieldReservationWidget extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			emoji: "test",
			text: "31",
			// le type est lie au css
			type: "field-occupied"
		};
	}

	renderText() {
		if (this.state.type != "field-free") {
			if(this.state.type =="field-occupied")
				this.state.text = "occupé"
			else {
				this.state.text = "retenu"
			}
			return <p>{this.state.text}</p>;
		}
		else {
			return <p>{this.state.text}°C</p>;
		}
	}

	renderEmoji() {
		const EMOJI_SIZE = 40;
		if (this.state.type != "field-free") {
			if (this.state.type == "field-occupied")
				this.state.emoji = "❌"
			else {
				this.state.emoji = "⚽"
			}
			return <p style={{ 'font-size': EMOJI_SIZE / 2 + 'px'}}>{this.state.emoji}</p>;
		}
		else {
			return <img src={this.state.emoji} style={{'width': EMOJI_SIZE + 'px'}} />;
		}		
	}

	callAPI() {
		// on utilise la clef du prof parce que il a acces a daily
		// voir : https://openweathermap.org/faq#error401
		const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
		const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
		const API_URL_ICON = "http://openweathermap.org/img/wn/";

		fetch(`${API_URL}?lat=${this.props.position.lat}&lon=${this.props.position.lng}&appid=${API_KEY}&cnt=${this.props.day}&units=metric`)
			.then(res => res.json())
			.then(res => this.setState({
				emoji: `${API_URL_ICON}${res.list[parseInt(this.props.day) - 1].weather[0].icon}@2x.png`,
				text: res.list[parseInt(this.props.day)-1].temp.day,
			}));
	}

	componentWillMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className={"field-default " + this.state.type}>
				<p className="time">{this.props.time}</p>
				{this.renderEmoji()}
				{this.renderText()}
			</div>
		);
	}
}