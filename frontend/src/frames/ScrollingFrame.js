import React from 'react';

import PartnerButton from '../buttons/PartnerButton.js';
import Argument from './arguments/Argument.js';

import '../reset.css';
import './ScrollingFrame.css';

/* Parties du ScrollingFrame */
const SITUATION_ARGUMENT = 'situation';
const CONFIDENCE_ARGUMENT = 'confidence';

/* Titres des parties du ScrollingFrame */
const SITUATION_ARGUMENT_TITLE = "⚽ Le Sport et les Jeunes";
const CONFIDENCE_ARGUMENT_TITLE = "🏫 Ils nous font confiance";

const WHITE_ARGUMENT = 'white-argument';
const BLACK_ARGUMENT = 'black-argument';

class ScrollingFrame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className='ScrollingFrame'>
                <div className='scroll-bar'/>
                <PartnerButton />
                <p className='teaser-proposition'>{this.props.teaser_proposition}</p>
                <div className='divite-bar'/>
                <Argument argument={SITUATION_ARGUMENT} title={SITUATION_ARGUMENT_TITLE} color={WHITE_ARGUMENT}/>
                <Argument argument={CONFIDENCE_ARGUMENT} title={CONFIDENCE_ARGUMENT_TITLE} color={WHITE_ARGUMENT}/>
            </main>
        );
    }
}

export default ScrollingFrame;