// TODO: Ameliorer BlackArgument / Emoji en blanc

import React from 'react';

import SituationArgumentContent from './SituationArgumentContent.js';
import SchoolFollowersWidget from '../../Widgets.js/SchoolFollowersWidget.js';
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
            
            case 'confidence':
                return(
                    <div className='ConfidenceArgumentContent'>
                        <SchoolFollowersWidget />
                        <PartnerButton />
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