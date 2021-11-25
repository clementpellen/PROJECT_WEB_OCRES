import React from 'react';

import '../reset.css';
import './PartnerButton.css';

class PartnerButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="PartnerButton" onClick=''>
                <span>Devenir Partenaire</span>
            </button>
        );
    }
}

export default PartnerButton;