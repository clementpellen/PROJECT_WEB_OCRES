import React from 'react';

import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

import './Media.css';

export default class Media extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  value: '',
                        hometeam: 'France' ,
                        score: '3 - 0', 
                        awayteam: 'Brésil',
                        scorediffmatch1: 3, 
                        scorediffmatch2: - 1, 
                        scorediffmatch3: 0,
                        scorediffmatch4: 0,
                        scorediffmatch5: 3
                        };

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
        fetch(`https://api.football-data.org/v2/teams/${this.state.value}/matches?status=FINISHED`, obj)
        //fetch(`https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED`, obj)
            .then(res => res.json()) // on récupére la reponse en json comme ca on peut se ballader dedans avec des points
            // .then(res => console.log(res.matches[res.matches.length-1])) // justement on se balade dedans avec des points
            .then(res => {
                    this.setState({
                    hometeam: res.matches[res.matches.length - 1].homeTeam.name,
                    score: res.matches[res.matches.length - 1].score.fullTime.homeTeam + " - " + res.matches[res.matches.length - 1].score.fullTime.awayTeam,
                    awayteam: res.matches[res.matches.length - 1].awayTeam.name,

                    scorediffmatch1: res.matches[res.matches.length - 5].score.fullTime.homeTeam - res.matches[res.matches.length - 5].score.fullTime.awayTeam,
                    scorediffmatch2: res.matches[res.matches.length - 4].score.fullTime.homeTeam - res.matches[res.matches.length - 4].score.fullTime.awayTeam,
                    scorediffmatch3: res.matches[res.matches.length - 3].score.fullTime.homeTeam - res.matches[res.matches.length - 3].score.fullTime.awayTeam,
                    scorediffmatch4: res.matches[res.matches.length - 2].score.fullTime.homeTeam - res.matches[res.matches.length - 2].score.fullTime.awayTeam,
                    scorediffmatch5: res.matches[res.matches.length - 1].score.fullTime.homeTeam - res.matches[res.matches.length - 1].score.fullTime.awayTeam
                })
                console.log(res.matches[res.matches.length - 1]);
            }) // justement on se balade dedans avec des points
            .catch(error => console.log(error)); // ca c'est par sécurité
    }

    // res.matches[res.matches.length - 1].awayTeam

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.callAPI();
        event.preventDefault();
    }

    BarChart() {
        return(
            <div className='BarChart'>

                <h2>{this.state.apiResponse}</h2>

                <Line 
                    data={{
                        labels: ['Match 1', 'Match 2', 'Match 3', 'Avant-dernier match', 'Dernier match'],
                        datasets: [
                            {
                                label: "Différence de buts des derniers matches",
                                data: [ this.state.scorediffmatch1,
                                        this.state.scorediffmatch2, 
                                        this.state.scorediffmatch3, 
                                        this.state.scorediffmatch4, 
                                        this.state.scorediffmatch5]
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
                        {/* <select className='input_text'>
                            <option value="86">Real Madrid</option>
                            <option value="57">Arsenal</option>
                            <option value="73">Tottenham</option>
                            <option value="81">Barcelone</option>
                        </select> */}
                    </label>
                    <input className='input_submit' type="submit" value="Choisir" />
                </form>

                <div className='stats-box'>
                    
                    <div className='last-match'>
                        <h3>Dernier match disputé :</h3>
                        <div className='score'>
                            <h2 className='team-name team-left'>{this.state.hometeam}</h2>
                            <h2>{this.state.score}</h2>
                            <h2 className='team-name team-right'>{this.state.awayteam}</h2>
                        </div>
                    </div>
                    
                    {this.BarChart()};

                </div>

            </div>
        );
    }

}