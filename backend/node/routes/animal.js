'use strict';

var express = require('express');
var router = express.Router();
const data = require('../db/data');

router.get('/', function (req, res, next) {
    res.json(data);
});

router.route('/:name') // REMOVE
    .get(function (req, res, next) {
        const animalName = req.params.name;
        if (data[animalName]) {
            res.json(data[animalName]);
        } else {
            res.send('no animal ' + animalName + ' to get');
        }
    })
    .delete(function (req, res, next) {
        const animalName = req.params.name;
        if (data[animalName]) { // idempotency!!!
            delete data[animalName];
            res.sendStatus(202);
        } else {
            res.send('no animal ' + animalName + ' to delete');
        }
    })
    .put(function (req, res, next) {
        const animalName = req.params.name;
        const animal = typeof req.body.data === 'string' ? JSON.parse(req.body.data) : req.body.data ;
        if (!data[animalName]) { // idempotency!!!
            data[animalName] = animal;
            res.sendStatus(201);
        } else {
            res.send('animal ' + animalName + ' already exists')
        }
    })
    .post(function (req, res, next) {
        const animalName = req.params.name;
        const animal = typeof req.body.data === 'string' ? JSON.parse(req.body.data) : req.body.data ;
        if (data[animalName]) { // idempotency!!!
            data[animalName] = animal;
            res.send('updated ' + animalName);
        } else {
            res.send('no animal ' + animalName + ' to update');
        }
    });

module.exports = router;
