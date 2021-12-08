
import React from 'react';
import './FieldReservationWidget.css';

const teamId = 1;

export default class FieldReservationWidget extends React.Component {
	constructor(props) {
		super(props);
	}

	getCssClassName() {
		if (this.props.team.teamId === 0)
			return "field-free";
		else if (this.props.team.teamId === teamId)
			return "field-retained";
		else
			return "field-occupied";
	}

	renderText() {
		if (this.props.team.teamId !== 0) {
			if (this.props.team.teamId !== teamId)
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
		const EMOJI_SIZE = 10;
		if (this.props.team.teamId !== 0) {
			if (this.props.team.teamId !== teamId)
				return <p style={{ 'fontSize': EMOJI_SIZE*2 + 'px', 'paddingTop': EMOJI_SIZE + 'px', 'paddingBottom': EMOJI_SIZE + 'px' }}>❌</p>;
			else {
				return <p style={{ 'fontSize': EMOJI_SIZE*2 + 'px', 'paddingTop': EMOJI_SIZE + 'px', 'paddingBottom': EMOJI_SIZE + 'px' }}>⚽</p>;
			}
		}
		else {
			return <img src={this.props.emoji} style={{'width': EMOJI_SIZE*4 + 'px'}} alt="meteo" />;
		}		
	}

	componentDidMount() {
		// si undefined on crée un component vide
		//
		// TODO
		// 
		// console.log(this.props.team.teamId);
	}

	render() {
		return (
			<div className={"field-default " + this.getCssClassName()}>
				<p className="time">{this.props.time}:00</p>
				{this.renderEmoji()}
				{this.renderText()}
			</div>
		);
	}
}