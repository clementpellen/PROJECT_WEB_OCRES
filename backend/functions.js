// getting-started.js
const mongoose = require('mongoose');
const Reservation = require('./schema/reservation');

mongoose.connect('mongodb://127.0.0.1:27017/corner')
	.then(console.log('connected to corner'))
	.catch(err => console.log(err));

async function createReservation() {
	try {
		const reservation = await Reservation.create({ 
			name: "Terrain Balard",
			days: [
				{
					day: 20211207,
					hours : [
						{ teamId: 2 },{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 0 },
						{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },
						{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 0 },{ teamId: 2 },
						{ teamId: 0 },{ teamId: 2 },{ teamId: 2 },{ teamId: 0 },{ teamId: 0 },{ teamId: 0 }
					]
				},
				{
					day: 20211208,
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: 20211209,
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
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

async function getReservation(field) {
	try {
		const reservations = await Reservation.find().select();
	} catch (err) {
		return err.message;
	}
}

module.exports = { getReservation, createReservation };