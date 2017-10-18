'use strict';

var express = require('express');
var router = express.Router();
const data = require('../db/data');
const util = require('../util/actions.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    "message": "welcome to node"
  });
});

router.get('/animal(s)?/', function (req, res, next) {
    res.json(data);
});

router.get('/animal/:name', function (req, res, next) {
    const animalName = req.params.name;
    if (data[animalName]) {
        res.json(JSON.stringify(data[animalName]));
    } else {
        res.sendStatus(204);
    }
});

router.delete('/animal/:name', function (req, res, next) {
    const animalName = req.params.name;
    delete data[animalName];
    res.sendStatus(202);
});

router.put('/animal/:name', function (req, res, next) {
    util.put(data, req.params.name, req.body.animal);
    res.sendStatus(201);
});

// TODO may just have to give this up
router.post('/animal/', function (req, res, next) {
    // console.log('req.body.animals',  req.body.animals);
    const animals = req.body.animals;
    animals.forEach(function (animal) {
        data[animal.name] = animal.data;
    });
    // res.sendStatus(200);
    res.json(JSON.stringify({"A":"bone"}));
    res.send('been seen and be heard');
});

router.options('/animal/', function (req, res, next) {
    res.sendStatus(200);
});

module.exports = router;
