//voila normalement ca marche en tout cas pour moi c'est le cas
import React from 'react';

export default class CallApi extends React.Component {

    // le state c'est pour sauvegarder ma réponse quelque part
    // mais tu peux très bien return le fetch opur récupérer le résultat et pas le sauvegarder dans le state
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    // j'ai déclaré la variable country dans le cas ou tu veux la changer
    // attention je l'ai déclaré en const faudra mettre une var si tu veux la modif dans ton code
    callAPI() {
        const country = "France";

        // on va voir ton lien
        fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
            .then(res => res.json()) // on récupére la reponse en json comme ca on peut se ballader dedans avec des points
            .then(res => this.setState({ apiResponse: res.All.confirmed })) // justement on se balade dedans avec des points
            .catch(error => console.log(error)); // ca c'est par sécurité
    }

    // c'est une fonction qui est appelé dès que le component est créé avant on utilisait WillMount
    // pour faire l'appel avant que il soit créé mais depuis la dernière version c'est pas conseillé
    componentDidMount() {
        this.callAPI();
    }

    // la y'a rien de chelou ...
    render() {
        return (
            <p className="App-intro">{this.state.apiResponse}</p>
        );
    }
}