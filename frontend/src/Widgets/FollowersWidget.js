/* TODO: METTRE à un nombre minimum */

import React from 'react';

import './FollowersWidget.css';

// const NB_SCHOOL_FOLLOWERS_TOTAL = 18;

// const NB_FOLLOWERS_TOTAL = 3;

const WINDOW_SCROLL_MIN = 730;

class FollowersWidget extends React.Component {

    _isMounted = false;

    nb_followers_total;

    constructor(props) {
        super(props);
        this.state = {nb_followers : 0}
    }

    checkWindowScroll() {
        if(window.scrollY > WINDOW_SCROLL_MIN)
            return true;
        else 
            return false;
    }

    determineIntervalTime() {
        return(3000 / this.nb_followers_total);
    }

    determineNbFollowers() {
        if(this.props.nb_teams_on_appli !== undefined) {
            this.nb_followers_total = this.props.nb_teams_on_appli;
        }
        else if(this.props.nb_parent_followers !== undefined) {
            this.nb_followers_total = this.props.nb_parent_followers;
        }
        else if(this.props.nb_school_followers !== undefined) {
            this.nb_followers_total = this.props.nb_school_followers;
        }
        else {
            console.log("ERROR : No Value For Widget");
        }
    }

    // callAPI() {
    //     fetch("http://localhost:3000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }

    // componentWillMount() {
    //     this.callAPI();
    // }

    componentDidMount() {
        setInterval(() => {
            if(this.checkWindowScroll())
                this.tick();
        }, this.determineIntervalTime());
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    tick() {
        this.setState({
            nb_followers : this.state.nb_followers + 1
        });
    }

    displayNbFollowers() {              
        if(this.state.nb_followers < this.nb_followers_total) {
            return this.state.nb_followers;
        }
        else {
            return this.nb_followers_total;
        }
    }

    render() {
        this.determineNbFollowers();
        return(
            <div className='FollowersWidget'>
                <h1>{this.displayNbFollowers()}</h1>
                <h5>{this.props.description_widget}</h5>
            </div>
        );
    }

}

export default FollowersWidget;