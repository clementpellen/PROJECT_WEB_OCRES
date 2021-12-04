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
const SITUATION_ARGUMENT_TITLE = "⚽ Le Sport et les Jeunes";
const PROBLEM_ARGUMENT_TITLE = "❓ Problème";
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
                    nb_teams_on_appli={this.props.nb_teams_on_appli} 
                    nb_parent_followers={this.props.nb_parent_followers} 
                    nb_school_followers={this.props.nb_school_followers} 
                    description_widget={this.props.description_widget} 
                    cta={this.props.cta}/>

            </main>
        );
    }
}

export default ScrollingFrame;