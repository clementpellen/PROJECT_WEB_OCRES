// getting-started.js
const mongoose = require('mongoose');
const Reservation = require('./schema/reservation');

mongoose.connect('mongodb://127.0.0.1:27017/corner')
	.then(console.log('connected to corner'))
	.catch(err => console.log(err));

run()

async function run() {
	try {
		const reservation = await Reservation.create({ name: "name1" });
		console.log(reservation)
	} catch (err) {
		console.log(err.message)
	}
}
