
import React from 'react';
import './FieldReservationWidget.css';

export default class FieldReservationWidget extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			// le type est lie au css
			type: "field-retained",
		};
	}

	renderText() {
		if (this.state.type !== "field-free") {
			if(this.state.type ==="field-occupied")
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
		if (this.state.type !== "field-free") {
			if (this.state.type === "field-occupied")
				return <p style={{ 'font-size': EMOJI_SIZE / 2 + 'px' }}>❌</p>;
			else {
				return <p style={{ 'font-size': EMOJI_SIZE / 2 + 'px' }}>⚽</p>;
			}
		}
		else {
			return <img src={this.props.emoji} style={{'width': EMOJI_SIZE + 'px'}} alt="meteo" />;
		}		
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