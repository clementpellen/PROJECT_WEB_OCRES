import React from 'react';

export default class CallApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/users")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <p className="App-intro">;{this.state.apiResponse}</p>
        );
    }
}