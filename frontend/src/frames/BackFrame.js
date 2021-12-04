import React from 'react';

import '../reset.css';
import './BackFrame.css';

class BackFrame extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <main id={this.props.backframe_id} className='BackFrame'>
                <h1 className='Corner'>Corner</h1>
                <h4 className='value-proposition'>{this.props.value_proposition}</h4>
                <img id={this.props.animation_id} className='animation' src={this.props.animation} alt="animation" />
            </main>
        );
    }
}

export default BackFrame;