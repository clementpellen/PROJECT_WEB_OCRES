import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapFrontFrame from './frames/MapFrontFrame.js'

import './Parallax.css';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <div className='MapContainer'>
                
                <Map className='BackFrame'
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 48.8534,
                            lng: 2.3488
                        }
                    }
                />

                <MapFrontFrame />  

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDtUSZyqH0c4xAVYpgMl8Mt7n4mwm-l7L4'
})(MapContainer);