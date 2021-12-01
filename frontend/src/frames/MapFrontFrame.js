import React from 'react';

import '../Parallax.css';
import './MapFrontFrame.css';

class MapFrontFrame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <main className='MapFrontFrame FrontFrame'>
                <h3>Ecole Rouelle</h3>
                <h4>Demain</h4>
            </main>
        );
    } 

}

export default MapFrontFrame;