import React from 'react';

import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

import './Media.css';

export default class Media extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: '' , value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    callAPI() {
        var myHeaders = new Headers();
		myHeaders.append("X-Auth-Token","f9475c7dc1df466b965ffe2a72d2f4a7");

		var obj = {
			method: "GET",
			headers: myHeaders,
			mode: "cors",
			cache: "default"
		};

        // on va voir ton lien
        fetch(`https://api.football-data.org/v2/teams/${this.state.value}/matches?status=SCHEDULED`, obj)
            .then(res => res.json()) // on récupére la reponse en json comme ca on peut se ballader dedans avec des points
            .then(res => console.log(res.matches[res.matches.length-1])) // justement on se balade dedans avec des points
            .catch(error => console.log(error)); // ca c'est par sécurité
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Le numéro a été soumis : ' + this.state.value);
        this.callAPI();
        event.preventDefault();
    }

    BarChart() {
        return(
            <div className='BarChart'>

                <h2>{this.state.apiResponse}</h2>

                <Line 
                    data={{
                        labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5'],
                        datasets: [
                            {
                                label: "Différence de buts des derniers matches",
                                data: [3, -1, 0, 0, 2]
                            }
                        ]
                    }}
                    height={300}
                    width={350}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }

    render() {
        return(
            <div className='Media'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3 className='team-number'>Numéro de l'équipe :</h3>
                        <input className='input_text' type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input className='input_submit' type="submit" value="Choisir" />
                </form>

                <div className='stats-box'>
                    
                    <div className='last-match'>
                        <h3>Dernier match disputé :</h3>
                        <div className='score'>
                            <h2 className='team-left'>France</h2>
                            <h2>3 - 0</h2>
                            <h2 className='team-right'>Brésil</h2>
                        </div>
                    </div>
                    
                    {this.BarChart()};

                </div>

            </div>
        );
    }

}