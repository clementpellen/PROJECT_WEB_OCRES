import React from 'react';

import PartnerButton from '../buttons/PartnerButton.js';
import Argument from './subframes/arguments/Argument.js';

import '../reset.css';
import './ScrollingFrame.css';

/* Parties du ScrollingFrame */
const SITUATION_ARGUMENT = 'situation';
const PROBLEM_ARGUMENT = 'problem';
const CONFIDENCE_ARGUMENT = 'confidence';

/* Titres des parties du ScrollingFrame */
// const SITUATION_ARGUMENT_TITLE = "⚽ Le Sport et les Jeunes";
const SITUATION_ARGUMENT_TITLE = <div className='title-box'><p className='emoji'>⚽</p><h2 className='title'> Le Sport et les Jeunes</h2></div>;
const PROBLEM_ARGUMENT_TITLE = <div className='title-box'><p className='emoji'>❓</p><h2 className='title'> Problème</h2></div>;
const CONFIDENCE_ARGUMENT_TITLE = <div className='title-box'><p className='emoji'>🏫</p><h2 className='title'> Ils nous font confiance</h2></div>;

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
                <PartnerButton cta={this.props.cta}/>
                <p className='teaser-proposition'>{this.props.teaser_proposition}</p>
                <div className='divite-bar'/>
                
                <Argument 
                    argument={SITUATION_ARGUMENT} 
                    title={SITUATION_ARGUMENT_TITLE} 
                    color={WHITE_ARGUMENT}/>

                <Argument 
                    argument={PROBLEM_ARGUMENT} 
                    title={PROBLEM_ARGUMENT_TITLE} 
                    color={BLACK_ARGUMENT}/>

                <Argument 
                    argument={CONFIDENCE_ARGUMENT} 
                    title={CONFIDENCE_ARGUMENT_TITLE} 
                    color={WHITE_ARGUMENT} 
                    widget_type={this.props.widget_type} 
                    description_widget={this.props.description_widget} 
                    cta={this.props.cta}/>

            </main>
        );
    }
}

export default ScrollingFrame;