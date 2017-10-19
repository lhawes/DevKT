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

module.exports = router;
