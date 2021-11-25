import React from 'react';

import PartnerButton from '../buttons/PartnerButton.js';

import '../reset.css';
import './ScrollingFrame.css';

class ScrollingFrame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className='ScrollingFrame'>
                <div className='scroll-bar'></div>
                <PartnerButton />
                <p className='teaser-proposition'>{this.props.teaser_proposition}</p>
            </main>
        );
    }
}

export default ScrollingFrame;