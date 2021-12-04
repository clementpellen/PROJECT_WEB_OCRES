import React from 'react';
import FieldReservationWidget from '../../Widgets/FieldReservationWidget.js';

export default class FieldReservationCarrousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            dayDisplayed: "1",
            positionDisplayed: { lat: 48.831390, lng: 2.271667 }
        };
    }

    // callAPI() {
    //     fetch("http://localhost:9000/reservation")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }

    // componentWillMount() {
    //     this.callAPI();
    // }

    renderWidgets() {
		// TODO setState de la position et du day/cnt
		const returnBuffer = [];
		for (var i = new Date().getUTCHours() + 2; i < 24; i++) {
			returnBuffer.push(
				<FieldReservationWidget position={{ lat: 48.831390, lng: 2.271667 }} day="1" time={i + ":00"} />
			);
        }
		return returnBuffer;
    }

    render() {
        return (
            this.renderWidgets()
        );
    }
}