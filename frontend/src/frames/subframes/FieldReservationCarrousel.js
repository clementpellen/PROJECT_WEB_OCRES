import React from 'react';
import FieldReservationWidget from '../../Widgets/FieldReservationWidget.js';
import './FieldReservationCarrousel.css';

export default class FieldReservationCarrousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			emoji: "test",
			morn: "12",
			day: "18",
			eve: "15",
			night: "10"
        };
    }

	getApiMeteoInfo() {
		// on utilise la clef du prof parce que il a acces a daily
		// voir : https://openweathermap.org/faq#error401
		const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
		const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
		const API_URL_ICON = "http://openweathermap.org/img/wn/";

		fetch(`${API_URL}?lat=${this.props.position.lat}&lon=${this.props.position.lng}&appid=${API_KEY}&cnt=${this.props.day}&units=metric`)
			.then(res => res.json())
			.then(res => this.setState({
				emoji: `${API_URL_ICON}${res.list[parseInt(this.props.day) - 1].weather[0].icon}@2x.png`,
				morn: res.list[parseInt(this.props.day) - 1].temp.morn,
				day : res.list[parseInt(this.props.day) - 1].temp.day,
				eve: res.list[parseInt(this.props.day) - 1].temp.eve,
				night: res.list[parseInt(this.props.day) - 1].temp.night
			}))
			.catch(error => console.log(error));
	}


	componentDidMount() {
		this.getApiMeteoInfo();
		console.log(this.state.meteo);
	}

    renderWidgets() {
		const returnBuffer = [];
		for (var i = new Date().getUTCHours() + 2; i < 24; i++) {
			var text;
			if(i <= 4 || i > 22)
				text = this.state.night;
			else if ( i > 4 && i <= 10)
				text = this.state.morn;
			else if (i > 10 && i <= 16)
				text = this.state.day;
			else
				text = this.state.eve;
			returnBuffer.push(
				<FieldReservationWidget key={i} emoji={this.state.emoji} text={text} time={i}/>
			);
        }
		return returnBuffer;
    }

    render() {
        return (
			<div className="reservation-carrousel-container">
				<div className="reservation-carrousel-scroller">
        			{this.renderWidgets()}
				</div>
			</div>
        );
    }
}