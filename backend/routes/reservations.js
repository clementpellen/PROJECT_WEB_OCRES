const express = require('express');
const _ = require('lodash');
var bodyParser = require('body-parser')

const Reservation = require('../schema/reservation.js');
const router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/corner')
    .then(console.log('connected to corner'))
    .catch(err => console.log(err));

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//const functions = require("../functions.js");

router.get('/', (req, res) => {
    Reservation.find(function (err, reservations) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(reservations);
    });
});

router.get('/fields/:field', (req, res) => {
    Reservation.find({"name": req.params.field}  ,function (err, reservations) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(reservations);
    });
});

router.post('/add', (req, res) => {
    
    const id = req.body.reservation;
    
    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send('id error');

    try {
        Reservation.findByIdAndUpdate({ id }, { "teamId": req.body.team }, { new: true });
        res.status(200).send("change");
    } catch(err) {
        console.log(err);
    }
    
});

// router.get('/fields/:field', (req, res) => {   
//     //// quand on charge un nouveau jour
//     // get les heures sur le jour

   

//     try {
//         var rep = functions.getReservation(req.params.field);

//         rep.then(function (result) {
//             console.log(result)
//             res.status(200).json(result);
//         });
//     } catch(err) {
//         res.status(500).send({ error: err.message });
//     }
// });



// router.get('/fields/:field/days/:day', (req, res) => {
//     //// quand on charge un nouveau jour
//     // get les heures sur le jour
//     try {
//         const reservations = Reservation.find({"name": req.params.field, "days.day" : req.params.day });
//         //res.status(200).send({ info: req.params.field, info2: req.params.day });
//     } catch (err) {
//         res.status(500).send({ error: err.message });
//     }
// });

//// quand il clic sur un widget
// post? on modifie la team du widget


//// quand ?
// put les jours suivant dans la bdd


//// quand ? (meme occas que au dessus)
// delete les jours precedents dans la bdd


// patch ??
module.exports = router;