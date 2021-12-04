import React from 'react';

import '../reset.css';
import './BackFrame.css';

class BackFrame extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {animation_margin_top : 0}
    }

    componentWillMount() {
        this.determineAnimationMarginTop();
    }
    
    determineAnimationMarginTop() {
        switch (this.props.backframe_id) {
            case "school-backframe":
                this.setState({
                    animation_margin_top : window.innerHeight - 700
                });
                break;
        
            default:
                break;
        }
    }

    render() {
        
        var style;

        if(this.state.animation_margin_top > 0)
            style = this.state.animation_margin_top + 'rem';
        else 
            style = 0 + 'rem';

        return (
            <main id={this.props.backframe_id} className='BackFrame'>
                <h1 className='Corner'>Corner</h1>
                <h4 className='value-proposition'>{this.props.value_proposition}</h4>
                <img id={this.props.animation_id} className='animation' src={this.props.animation} alt="animation" style={{marginTop : style}}/>
            </main>
        );
    }
}

export default BackFrame;