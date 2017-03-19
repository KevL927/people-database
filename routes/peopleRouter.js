var express = require('express');
var peopleRouter = express.Router();
var mongoose = require('mongoose');

var People = require('../models/people');

peopleRouter.get('/', function(req, res) {
  People.find({}, function(err, people) {
    if (err) {
      return res.status(err);
    }
    return res.status(200).json(people);
  });
});

module.exports = peopleRouter;
