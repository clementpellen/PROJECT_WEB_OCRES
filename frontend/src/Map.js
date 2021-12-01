import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import ScrollingFrame from './frames/ScrollingFrame.js';

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

                <div className='FrontFrame'>  
                    
                    <ScrollingFrame
                        cta={"SCHOOL_CTA"} 
                        teaser_proposition={"SCHOOL_TEASING_PROPOSITION"} 
                        nb_school_followers={"NB_SCHOOL_FOLLOWERS_TOTAL"} 
                        description_widget={"SCHOOL_DESCRIPTION_WIDGET"}/>

                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDtUSZyqH0c4xAVYpgMl8Mt7n4mwm-l7L4'
})(MapContainer);