import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import MapFrontFrame from '../frames/MapFrontFrame.js'

import '../Parallax.css';

const mapStyles = {
	width: '100%',
	height: '100%'
};

export class MapContainer extends Component {
	
	state = {
		showingInfoWindow: false,  // Hides or shows the InfoWindow
		activeMarker: {},          // Shows the active marker upon click
		selectedPlace: {},         // Shows the InfoWindow to the selected place upon a marker

		frontframe_margin_top : window.innerHeight - 185
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	renderFrontFrame = () => {
		if (this.state.showingInfoWindow) {
			return <MapFrontFrame frameIsOn={true} position={{
				lat: this.state.selectedPlace.position.lat,
				lng: this.state.selectedPlace.position.lng
			}} key={this.state.selectedPlace.position.lat + this.state.selectedPlace.position.lng}/>;
		}
		else {
			return <MapFrontFrame frameIsOn={false} position={{ lat: 48.8566, lng: 2.3522 }} />;
		}
	};
	
	render() {

		var style = this.state.frontframe_margin_top + 'rem';

		return (
			<div className='MapContainer'>
				<Map className="BackFrame"
					google={this.props.google}
					zoom={13}
					style={mapStyles}
					initialCenter={{lat: 48.8534, lng: 2.3488}}
				>
					<Marker
						position={{lat: 48.851346, lng: 2.291883}}
						onClick={this.onMarkerClick}
						name={"5v5 public"}
					/>
					<Marker
						position={{lat: 40.831390, lng: 2.271667}}
						onClick={this.onMarkerClick}
						name={"11v11 public"}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					>
						<div>
							<h4>{this.state.selectedPlace.name}</h4>
						</div>
					</InfoWindow>
				</Map>
				<div className='FrontFrame' style={{marginTop : style}}>	
					{this.renderFrontFrame()}
				</div>
			</div>
		);
	}

	
		
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDtUSZyqH0c4xAVYpgMl8Mt7n4mwm-l7L4'
})(MapContainer);