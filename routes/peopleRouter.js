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

peopleRouter.get('/:peopleId', function(req, res) {
  var peopleId = req.params.peopleId;

  if (peopleId.match(/^[0-9a-fA-F]{24}$/)) {
    People.findById(peopleId, function(err, people) {
      if (err) {
        return res.status(err);
      }
      return res.status(200).json(people);
    });
  } else {
      return res.sendStatus(404);
  }
});

module.exports = peopleRouter;
