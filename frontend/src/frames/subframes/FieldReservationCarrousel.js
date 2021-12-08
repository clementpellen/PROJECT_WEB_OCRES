import React from 'react';
import FieldReservationWidget from '../../Widgets/FieldReservationWidget.js';
import './FieldReservationCarrousel.css';

const myTeam = 1;

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

	changeTeamAPI(hours, idTeam) {
		
		var data;
		if (hours.teamId === idTeam)
			data = {reservation: hours._id, team: 0};
		else if (hours.teamId === 0)
			data = {reservation: hours._id, team: idTeam};
		else
			return "cant-change-team";
		
		var myHeaders = new Headers();
		myHeaders.append("Content-Type","application/json");

		var obj = {
			method: "POST",
			headers: myHeaders,
			mode: "cors",
			cache: "default",
			body: JSON.stringify(data)
		};

		
		fetch(`http://localhost:9000/reservations/add`, obj)
			.then(res => res.json())
			.then(res => {console.log(res)})
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
				var reservationsIndex;
				// pb avec findIndex du coup on le fait a la mano
				// on utilise .entries() parce que ca renvoie un tableau de paires 
				// de propriétés [clé, valeur] énumérables de notre aray days
				// on peut alors utiliser la clé -> l'indice i de boucle de days
				for (const [j, elem] of this.state.reservations.days.entries()) {
					const d1 = new Date(Date.parse(elem.day));
					var d2 = new Date();
					d2.setDate(d2.getDate() + this.props.day - 1);
					if (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()) {
						reservationsIndex = j;
						break;
					}
				}

				// var reservationsIndex = this.state.reservations.days.findIndex((elem) => { 
				// 	var d1 = Date.parse(elem.day);
				// 	const d2 = new Date();
				// 	return d1.getFullYear() === d2.getFullYear() &&
				// 	d1.getMonth() === d2.getMonth() &&
				// 	d1.getDate() === d2.getDate();
				// });
				
				if(i <= 4 || i > 22)
					text = this.state.night;
				else if ( i > 4 && i <= 10)
					text = this.state.morn;
				else if (i > 10 && i <= 16)
					text = this.state.day;
				else
					text = this.state.eve;
				
				if (typeof this.state.reservations.days[reservationsIndex] !== 'undefined')
					returnBuffer.push(
						<div key={i} onClick={() => this.changeTeamAPI(this.state.reservations.days[reservationsIndex].hours[i], myTeam)} style={{ cursor: "pointer"}}>
							<FieldReservationWidget key={i}
								emoji={this.state.emoji}
								text={text}
								time={i}
								team={this.state.reservations.days[reservationsIndex].hours[i]}
								myTeam={myTeam}
							/>
						</div>
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