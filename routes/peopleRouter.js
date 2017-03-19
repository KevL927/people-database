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

peopleRouter.post('/', function(req, res) {
  var name = req.body.name;
  var favoriteCity = req.body.favoriteCity;

  People.create({ name: name, favoriteCity: favoriteCity }, function(err, people) {
    if (name === undefined || favoriteCity === undefined) {
      return res.status(422).json({error: 'Missing field'});
    }
    else if (err && err.errmsg.slice(0,6) === 'E11000') {
      return res.status(409).json({error: 'User already exists'});
    }
    else if (err) {
      return res.sendStatus(500);
    }
    return res.status(201).json({message: 'User created successfully'});
  })
});

peopleRouter.put('/', function(req, res) {
  var peopleId = req.body._id;
  var name = req.body.name;
  var favoriteCity = req.body.favoriteCity;

  if (peopleId.match(/^[0-9a-fA-F]{24}$/) && name && favoriteCity) {
    People.findByIdAndUpdate(peopleId, { name: name, favoriteCity: favoriteCity }, { new: true },
      function(err, people) {
        if (err) {
          return res.sendStatus(500);
        }
        return res.status(201).json({message: 'User updated successfully'});
      }
    )
  } else {
  return res.sendStatus(404);
  }
});
 
module.exports = peopleRouter;
