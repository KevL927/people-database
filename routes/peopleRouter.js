var express = require('express');
var peopleRouter = express.Router();
var mongoose = require('mongoose');

var People = require('../models/people');

/* GET home page. */
peopleRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = peopleRouter;
