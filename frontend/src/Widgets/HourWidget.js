import React from 'react';

import './HourWidget.css';

class HourWidget extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // const hour_widget_classes = 'HourWidget ' +this.props.type;
        const hour_widget_classes = 'HourWidget free_hour';
        return(
            <div className={hour_widget_classes}>
                <p>16:00</p>
                {/* <div style={{height:20px; width:20px; background-color:var(--grey)}}/> */}
            </div>
        );
    }
}

export default HourWidget;