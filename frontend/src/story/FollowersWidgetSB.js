import React from 'react';

import './FollowersWidgetSB.css';

const WINDOW_SCROLL_MIN = 0;

class FollowersWidget extends React.Component {

    _isMounted = false;

    nb_followers_total;

    launch_increment = false;

    interval;

    constructor(props) {
        super(props);
        this.state = {nb_followers : 0, apiResponse: ""}
    }

    checkWindowScroll() {
        // if(window.scrollY > WINDOW_SCROLL_MIN)
            return true;
        // else 
            // return false;
    }

    determineIntervalTime() {
        return(3000 / this.nb_followers_total);
    }

    determineNbFollowers() {
        this.nb_followers_total = 78;
    }

    callAPI() {
        var api_request;
        api_request = "http://localhost:9000/followers/nb-teams"

        fetch(api_request)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        // this.callAPI();
    }

    // componentDidMount() {}

    incrementNbFollowers = () => {
        this.interval = setInterval(() => {
            if(this.checkWindowScroll())
                this.tick();
        }, this.determineIntervalTime());

        if(!isNaN(this.nb_followers_total) && !isNaN(this.state.nb_followers)) {
            if(this.state.nb_followers > this.nb_followers_total) {
                clearInterval(this.interval);
            }
        }
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
        if(!isNaN(this.nb_followers_total) && !isNaN(this.state.nb_followers)) {
            if(this.state.nb_followers < this.nb_followers_total) {
                return this.state.nb_followers;
            }
            else {
                return this.nb_followers_total;
            }
        }
        else {
            return 0;
        }
    }

    render() {
        
        if(isNaN(this.nb_followers_total)) {
            this.determineNbFollowers();
            this.launch_increment = true;
        }

        if(!isNaN(this.nb_followers_total) && this.launch_increment) {
            this.incrementNbFollowers();
            this.launch_increment = false;
        }

        return(
            <div className='FollowersWidget'>
                <h1>{this.displayNbFollowers()}</h1>
                <h5>équipes nous font déjà confiance</h5>
            </div>
        );
    }

}

export default FollowersWidget;