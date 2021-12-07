const express = require('express');
const _ = require('lodash');
var bodyParser = require('body-parser')

const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const mongoose = require('mongoose');
const Reservation = require('../schema/reservation');

mongoose.connect('mongodb://127.0.0.1:27017/corner')


router.get('/fields/:field/days/:day', (req, res) => {
    //// quand on charge un nouveau jour
    // get les heures sur le jour
    try {
        const reservations = Reservation.find({"name": req.params.field, "days.day" : req.params.day });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//// quand il clic sur un widget
// post? on modifie la team du widget


//// quand ?
// put les jours suivant dans la bdd


//// quand ? (meme occas que au dessus)
// delete les jours precedents dans la bdd


// patch ??
module.exports = router;