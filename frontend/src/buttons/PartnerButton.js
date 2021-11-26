import React from 'react';

import '../reset.css';
import './PartnerButton.css';

class PartnerButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="PartnerButton" /*onClick=''*/>
                <h3>{this.props.cta}</h3>
            </button>
        );
    }
}

export default PartnerButton;