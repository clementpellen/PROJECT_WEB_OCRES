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
					day: "2021-12-08",
					hours : [
						{ teamId: 1 },{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 0 },
						{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 0 },
						{ teamId: 2 },{ teamId: 0 },{ teamId: 2 },{ teamId: 1 },{ teamId: 0 },{ teamId: 2 },
						{ teamId: 0 },{ teamId: 2 },{ teamId: 1 },{ teamId: 0 },{ teamId: 0 },{ teamId: 0 }
					]
				},
				{
					day: "2021-12-09",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-10",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-11",
					hours: [
						{ teamId: 1 }, { teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 1 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-12",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-13",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-14",
					hours: [
						{ teamId: 1 }, { teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 1 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-15",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-16",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-17",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-18",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-19",
					hours: [
						{ teamId: 1 }, { teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 0 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 1 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-20",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-21",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-22",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-23",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-24",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-25",
					hours: [
						{ teamId: 2 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 1 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 0 }
					]
				},
				{
					day: "2021-12-26",
					hours: [
						{ teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 1 }, { teamId: 0 }, { teamId: 0 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 2 }, { teamId: 0 }, { teamId: 0 }, { teamId: 1 }, { teamId: 2 }, { teamId: 2 },
						{ teamId: 0 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 2 }, { teamId: 0 }
					]
				}
			]
		 });
	} catch (err) {
		console.log(err.message)
	}
};

module.exports = { createReservation };