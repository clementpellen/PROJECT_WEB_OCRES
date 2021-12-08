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
			night: "10",
			reservations: ""
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
				emoji: `${API_URL_ICON}${res.list[this.props.day - 1].weather[0].icon}@2x.png`,
				morn: res.list[this.props.day - 1].temp.morn,
				day : res.list[this.props.day - 1].temp.day,
				eve: res.list[this.props.day - 1].temp.eve,
				night: res.list[this.props.day - 1].temp.night
			}))
			.catch(error => console.log(error));
	}

	getReservationInAPI() {
		fetch(`http://localhost:9000/reservations/fields/${this.props.name}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ reservations: res[0] });
			})
			.catch(error => console.log(error));
	}

	componentDidMount() {
		this.getApiMeteoInfo();
		this.getReservationInAPI();
		// console.log(this.state.reservations);
	}

    renderWidgets() {
		if (typeof this.state.reservations !== 'undefined' && this.state.reservations !== "") {
			const returnBuffer = [];
			var start = 0;
			if(this.props.day === 1) {
				start = new Date().getUTCHours() + 2
			}
			for (let i = start; i < 24; i++) {
				var text;
				
				// pb avec findIndex
				for (const elem of this.state.reservations.days) {
					console.log(elem);
				}

				// var reservationsIndex = this.state.reservations.days.findIndex((elem) => { 
				// 	var d1 = Date.parse(elem.day);
				// 	const d2 = new Date();
				// 	console.log(elem);
				// 	// return d1.getFullYear() === d2.getFullYear() &&
				// 	// 	d1.getMonth() === d2.getMonth() &&
				// 	// 	d1.getDate() === d2.getDate();
				// 	return 1;
				// });
				
				if(i <= 4 || i > 22)
					text = this.state.night;
				else if ( i > 4 && i <= 10)
					text = this.state.morn;
				else if (i > 10 && i <= 16)
					text = this.state.day;
				else
					text = this.state.eve;
				returnBuffer.push(
					<FieldReservationWidget key={i} emoji={this.state.emoji} text={text} time={i} reservations={this.state.reservations} />
				);
			}
			return returnBuffer;
		}
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