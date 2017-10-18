'use strict';

var express = require('express');
var router = express.Router();
const data = require('../db/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    "message": "welcome to node"
  });
});

router.get('/animals/', function (req, res, next) {
    res.json(data);
});

router.route('/animal/:name')
    .get(function (req, res, next) {
        const animalName = req.params.name;
        console.log('animalName',  animalName);
        if (animalName.length && data[animalName]) {
            res.json(data[animalName]);
        } else {
            res.send('no animal ' + animalName + ' to get');
        }
    })
    .delete(function (req, res, next) {
        const animalName = req.params.name;
        if (data[animalName]) {
            delete data[animalName];
            res.sendStatus(202);
        } else {
            res.send('no animal ' + animalName + ' to delete');
        }
    })
    .put(function (req, res, next) {
        console.log('req.body',  Object.keys(req.body));
        const animalName = req.params.name;
        const animal = typeof req.body.data === 'string' ? JSON.parse(req.body.data) : req.body.data ;
        if (!data[animalName]) { // idempotency!!!
            data[animalName] = animal;
            res.sendStatus(200);
        } else {
            res.send('animal ' + animalName + ' already exists')
        }
    })
    .post(function (req, res, next) {
        console.log('req.body',  Object.keys(req.body));
        const animalName = req.params.name;
        const animal = typeof req.body.data === 'string' ? JSON.parse(req.body.data) : req.body.data ;
        if (data[animalName]) { // idempotency!!!
            data[animalName] = animal;
            res.sendStatus('updated ' + animalName);
        } else {
            res.send('no animal ' + animalName + ' to update');
        }
    });

module.exports = router;
