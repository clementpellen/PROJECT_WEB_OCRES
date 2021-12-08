// route  pour acceder au endpoint FOLLOWERS
// destine aux requetes des landings pages

const express = require('express');
// Lodash utils library
const _ = require('lodash');
var bodyParser = require('body-parser')

const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let followers = {  
    
    teams:
        
        [{
            id: "0",
            name: "equipe_une"
        },
        {
            id: "1",
            name: "equipe_deux"
        },
        {
            id: "2",
            name: "equipe_une"
        },
        {
            id: "3",
            name: "equipe_deux"
        },
        {
            id: "4",
            name: "equipe_une"
        },
        {
            id: "5",
            name: "equipe_deux"
        }],

    parents:

        [{
            id: "0",
            name: "parent_un"
        },
        {
            id: "1",
            name: "parent_deux"
        }],
        
    schools:

        [{
            id: "0",
            name: "école_une"
        },
        {
            id: "1",
            name: "école_deux"
        }]

};

/* GET users listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
    res.status(200).json({ followers });
});

router.get('/teams', (req, res) => {
    res.status(200).json(followers.teams);
});

router.get('/nb-teams', (req, res) => {
    res.status(200).json(followers.teams.length);
});

router.get('/parents', (req, res) => {
    res.status(200).json(followers.parents);
});

router.get('/nb-parents', (req, res) => {
    res.status(200).json(followers.parents.length);
});

router.get('/schools', (req, res) => {
    res.status(200).json(followers.schools);
});

router.get('/nb-schools', (req, res) => {
    res.status(200).json(followers.schools.length);
});

module.exports = router;