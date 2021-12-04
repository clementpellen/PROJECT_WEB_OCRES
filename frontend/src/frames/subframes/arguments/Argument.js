// TODO: Ameliorer BlackArgument / Emoji en blanc

import React from 'react';

import SituationArgumentContent from './SituationArgumentContent.js';
import ProblemArgumentContent from './ProblemArgumentContent.js';

import FollowersWidget from '../../../Widgets/FollowersWidget.js';
import PartnerButton from '../../../buttons/PartnerButton.js';

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
                            widget_type={this.props.widget_type} 
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