import React from 'react';

class BackFrame extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div>
                <h1 className='Corner'>Corner</h1>
                <p className='value-proposition'>{this.props.value_proposition}</p>
            </div>
        );
    }
}

export default BackFrame;