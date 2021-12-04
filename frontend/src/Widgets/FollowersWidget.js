/* TODO: METTRE à un nombre minimum */

import React from 'react';

import './FollowersWidget.css';

const WINDOW_SCROLL_MIN = 730;

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
        if(window.scrollY > WINDOW_SCROLL_MIN)
            return true;
        else 
            return false;
    }

    determineIntervalTime() {
        return(3000 / this.nb_followers_total);
    }

    determineNbFollowers() {
        if(this.props.widget_type === "teams") {
            this.nb_followers_total = parseInt(this.state.apiResponse);
        }
        else if(this.props.widget_type === "parents") {
            this.nb_followers_total = parseInt(this.state.apiResponse);
        }
        else if(this.props.widget_type === "schools") {
            this.nb_followers_total = parseInt(this.state.apiResponse);
        }
        else {
            console.log("ERROR : No Value For Widget");
        }
    }

    callAPI() {
        var api_request;
        
        switch (this.props.widget_type) {
            case "teams":
                api_request = "http://localhost:9000/followers/nb-teams"
                break;
            case "parents":
                api_request = "http://localhost:9000/followers/nb-parents"
                break;
            case "schools":
                api_request = "http://localhost:9000/followers/nb-schools"
                break;
            default:
                break;
        }

        fetch(api_request)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
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
                <h5>{this.props.description_widget}</h5>
            </div>
        );
    }

}

export default FollowersWidget;