// TODO: Ameliorer BlackArgument / Emoji en blanc

import React from 'react';

import SituationArgumentContent from './SituationArgumentContent.js';
import ProblemArgumentContent from './ProblemArgumentContent.js';

import FollowersWidget from '../../Widgets/FollowersWidget.js';
import PartnerButton from '../../buttons/PartnerButton.js';

import './Argument.css';

class Argument extends React.Component {

    constructor(props) {
        super(props);
    }

    displayArgumentContent() {
        switch (this.props.argument) {
            case 'situation':
                return(
                    <SituationArgumentContent />
                );

            case 'problem':
                return(
                    <ProblemArgumentContent />
                );
            
            case 'confidence':
                return(
                    <div className='ConfidenceArgumentContent'>
                        
                        <FollowersWidget 
                            nb_teams_on_appli={this.props.nb_teams_on_appli} 
                            nb_parent_followers={this.props.nb_parent_followers} 
                            nb_school_followers={this.props.nb_school_followers} 
                            description_widget={this.props.description_widget}/>

                        <PartnerButton cta={this.props.cta}/>
                    </div>
                );
        
            default:
                break;
        }
    }

    render() {
        const className_argument = 'Argument ' +this.props.color;
        return(
            <div className={className_argument}>
                <h2 className='title'>{this.props.title}</h2>
                {this.displayArgumentContent()};
            </div>    
        );
    }
}

export default Argument;