var express = require('express');
var peopleRouter = express.Router();
var mongoose = require('mongoose');

var People = require('../models/people');

peopleRouter.get('/', function(req, res) {
  People.find({}, function(err, people) {
    if (err) {
      return res.status(err);
    }
    return res.status(200).json({
      people: people.map(
        person => person.apiRepr()
      )
    });
  });
});

peopleRouter.get('/1', function(req, res) {
  People.find({}, function(err, people) {
    if (err) {
      return res.status(err);
    }
    return res.status(200).json({
      people: people.map(
        person => person.apiRepr()
      )
    });
  });
});

peopleRouter.get('/:peopleId', function(req, res) {
  var peopleId = req.params.peopleId;

  if (peopleId.match(/^[0-9a-fA-F]{24}$/)) {
    People.findById(peopleId, function(err, people) {
      if (err) {
        return res.status(err);
      }
      return res.status(200).json({
        people: people.map(
          person => person.apiRepr()
        )
      });
    });
  } else {
      return res.sendStatus(404);
  }
});

peopleRouter.post('/', function(req, res) {
  var name = req.body.name;
  var favoriteCity = req.body.favoriteCity;

  People.create({ name: name, favoriteCity: favoriteCity },
    function(err, people) {
      let peopleArray = [people];
      if (name === undefined || favoriteCity === undefined) {
        return res.status(422).json({error: 'Missing field'});
      } else if (err) {
          return res.sendStatus(500);
      }
      return res.status(201).json({
        message: 'User Created Successfully',
        people: peopleArray.map(
          person => person.apiRepr()
        )
      });
    }
  )
});

peopleRouter.put('/', function(req, res) {
  var peopleId = req.body.id;
  var favoriteCity = req.body.favoriteCity;

  if (peopleId.match(/^[0-9a-fA-F]{24}$/) && favoriteCity) {
    People.findByIdAndUpdate(peopleId, { favoriteCity: favoriteCity }, { new: true },
      function(err, people) {
        let peopleArray = [people];
        if (err) {
          return res.sendStatus(500);
        }
        return res.status(201).json({
          message: 'Favorite City updated successfully',
          people: peopleArray.map(
          person => person.apiRepr()
          )
        });
      }
    )
  }else {
    return res.sendStatus(404);
  }
});

peopleRouter.delete('/:peopleId', function(req,res) {
  var peopleId = req.params.peopleId;

  if (peopleId.match(/^[0-9a-fA-F]{24}$/)) {
    People.findByIdAndRemove(peopleId, function(err, people) {
      return res.status(200).json({message: 'User deleted successfully'});
    })
  } else {
      return res.sendStatus(404);
  }
});

module.exports = peopleRouter;
