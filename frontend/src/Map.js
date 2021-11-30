import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
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
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDtUSZyqH0c4xAVYpgMl8Mt7n4mwm-l7L4'
})(MapContainer);