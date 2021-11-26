import React from 'react';

import './SchoolFollowersWidget.css';

const NB_SCHOOL_FOLLOWERS_TOTAL = 18;

class SchoolFollowersWidget extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {nb_school_followers : 0}
    }

    componentDidMount() {
        setInterval(() => {
            this.tick();
        }, 80);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    tick() {
        this.setState({
            nb_school_followers : this.state.nb_school_followers + 1
        });
    }

    displayNbSchoolFollowers() {
        if(this.state.nb_school_followers < NB_SCHOOL_FOLLOWERS_TOTAL) {
            return this.state.nb_school_followers;
        }
        else {
            return NB_SCHOOL_FOLLOWERS_TOTAL;
        }
    }

    render() {
        return(
            <div className='SchoolFollowersWidget'>
                <h1>{this.displayNbSchoolFollowers()}</h1>
                <h5>lycées nous font déjà confiances</h5>
            </div>
        );
    }

}

export default SchoolFollowersWidget;