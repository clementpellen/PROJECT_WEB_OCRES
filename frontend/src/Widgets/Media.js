import React from 'react';

export default class Media extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        const country = "France";

        // on va voir ton lien
        fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
            .then(res => res.json()) // on récupére la reponse en json comme ca on peut se ballader dedans avec des points
            .then(res => this.setState({ apiResponse: res.All.confirmed })) // justement on se balade dedans avec des points
            .catch(error => console.log(error)); // ca c'est par sécurité
    }
    
    componentDidMount() {
        // this.callAPI();
    }

    render() {
        return(
            <h1>YO</h1>
        );
    }

}