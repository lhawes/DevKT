'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    "message": "welcome to node"
  });
});

router.get('/test', function(req, res, next) {
   res.redirect(301, '/testpage.html');
});

module.exports = router;
