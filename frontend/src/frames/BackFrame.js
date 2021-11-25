import React from 'react';

import '../reset.css';
import './BackFrame.css';

import parent_animation from '../img/gif/parent_animation.gif';

class BackFrame extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <main className='BackFrame'>
                <h1 className='Corner'>Corner</h1>
                <p className='value-proposition'>{this.props.value_proposition}</p>
                <img src={parent_animation} />
            </main>
        );
    }
}

export default BackFrame;