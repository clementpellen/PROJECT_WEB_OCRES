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
                <h3>Devenir Partenaire</h3>
            </button>
        );
    }
}

export default PartnerButton;