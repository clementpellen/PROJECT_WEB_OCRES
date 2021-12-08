// getting-started.js
const mongoose = require('mongoose');
const Reservation = require('./schema/reservation');

mongoose.connect('mongodb://127.0.0.1:27017/corner')
	.then(console.log('connected to corner'))
	.catch(err => console.log(err));

async function createReservation() {
	try {
		const reservation = await Reservation.create({ 
			name: "Balard2",
			days: [
				{
					day: "2002-12-09",
					hours : [
						{ teamId: 1 },{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 0 },
						{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },
						{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 1 },{ teamId: 0 },{ teamId: 2 },
						{ teamId: 0 },{ teamId: 2 },{ teamId: 1 },{ teamId: 0 },{ teamId: 0 },{ teamId: 0 }
					]
				},
				{
					day: "2002-12-09",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2002-12-09",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				}
			]
		 });
		console.log(reservation)
	} catch (err) {
		console.log(err.message)
	}
};

module.exports = { createReservation };