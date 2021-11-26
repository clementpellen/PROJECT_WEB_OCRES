import React from 'react';

const NB_SCHOOL_FOLLOWERS_TOTAL = 18;

class SchoolFollowersWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nb_school_followers : 0}
    }

    increase_nbschoolfollowers() {
        this.componentDidiMount();
    }

    componentDidiMount() {
        setInterval(() => {
            this.tick();
        }, 1000);
    }
    
    tick() {
        this.setState({
            nb_school_followers : this.state.nb_school_followers + 1
        });
    }

    render() {
        this.increase_nbschoolfollowers();
        return(
            <h1>{this.state.nb_school_followers}</h1>
        );
    }

}

export default SchoolFollowersWidget;