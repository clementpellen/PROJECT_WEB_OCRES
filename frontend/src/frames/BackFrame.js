import React from 'react';

import '../reset.css';
import './BackFrame.css';

class BackFrame extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <main className='BackFrame'>
                <h1 className='Corner'>Corner</h1>
                <p className='value-proposition'>{this.props.value_proposition}</p>
            </main>
        );
    }
}

export default BackFrame;