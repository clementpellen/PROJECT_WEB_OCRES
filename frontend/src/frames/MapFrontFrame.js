import React from 'react';
import FieldReservationCarrousel from './subframes/FieldReservationCarrousel.js';

import '../Parallax.css';
import './MapFrontFrame.css';

export default class MapFrontFrame extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			day: 1
		}
		// pour pouvoir setState alors que le composent n'est  pas encore mounted 
		// il faut bind les deux fonctions qui le setState
		this.dayUp = this.dayUp.bind(this);
		this.dayDown = this.dayDown.bind(this);
	}

	dayUp() {
		if (this.state.day < 16)
			this.setState({day: this.state.day + 1});
	}

	dayDown() {
		if (this.state.day > 1)
			this.setState({day: this.state.day - 1});
	}

	renderDay() {
		switch (this.state.day) {
			case 1:
				return "Aujourd'hui";
			case 2:
				return "Demain";
			default:
				const date = new Date(); 
				date.setDate(date.getDate() + this.state.day - 1);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		}
	}

	render() {
		return(
			<main className='MapFrontFrame'>
				<h3>{this.props.name}</h3>
				<h4>
					<button onClick={this.dayDown} style={{ 'backgroundColor': 'var(--white)' }}> &nbsp;{"<"}&nbsp; </button>
					{this.renderDay()}
					<button onClick={this.dayUp} style={{ 'backgroundColor': 'var(--white)' }}> &nbsp;{">"}&nbsp; </button>
				</h4>
				<FieldReservationCarrousel position={this.props.position} day={this.state.day} name={this.props.name} key={this.state.day} />
			</main>
		);
	}

}