const express = require('express');
// Lodash utils library
const _ = require('lodash');
var bodyParser = require('body-parser')

const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let followers = [{
  
    teams:

    [{
        id: "0",
        name: "equipe_une"
    },
    {
        id: "1",
        name: "equipe_deux"
    }],

    parents:

    [{
        id: "0",
        name: "equipe_une"
    },
    {
        id: "1",
        name: "equipe_deux"
    }],
    
    schools:

    [{
        id: "0",
        name: "equipe_une"
    },
    {
        id: "1",
        name: "equipe_deux"
    }]

}];

/* GET users listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
  res.status(200).json({ followers });
});

router.get('/nb-teams', (req, res) => {
    res.status(200).json( followers.teams );
});


module.exports = router;