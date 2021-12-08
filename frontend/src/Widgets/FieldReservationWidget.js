
import React from 'react';
import './FieldReservationWidget.css';

const teamId = 1;

export default class FieldReservationWidget extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			// le type est lie au css
			//type: "field-occupied"
		};
	}

	// setType() {
	// 	if (this.props.team === 0) {
	// 		this.setState({ type: "field-free" });
	// 	} else if (this.props.team === teamId) {
	// 		this.setState({ type: "field-retained" });
	// 	}
	// }

	renderText() {
		if (this.props.team !== 0) {
			if(this.props.team !== teamId)
			return <p>occupé</p>;
			else {
				return <p>retenu</p>;
			}
		}
		else {
			return <p>{this.props.text}°C</p>;
		}
	}

	renderEmoji() {
		const EMOJI_SIZE = 40;
		if (this.props.team !== 0) {
			if (this.props.team !== teamId)
				return <p style={{ 'fontSize': EMOJI_SIZE / 2 + 'px' }}>❌</p>;
			else {
				return <p style={{ 'fontSize': EMOJI_SIZE / 2 + 'px' }}>⚽</p>;
			}
		}
		else {
			return <img src={this.props.emoji} style={{'width': EMOJI_SIZE + 'px'}} alt="meteo" />;
		}		
	}

	componentDidMount() {
		// si undefined on crée un component vide
		//
		// TODO
		// 
		console.log(this.props.team);
	}

	render() {
		return (
			<div className={"field-default " + this.state.type}>
				<p className="time">{this.props.time}:00</p>
				{this.renderEmoji()}
				{this.renderText()}
			</div>
		);
	}
}