var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var peopleRouter = require('./routes/peopleRouter');
var setCORS = require('./config/cors');

var app = express();

mongoose.connect(process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost:27017/people');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use('/people/*', setCORS);
app.use('/people', setCORS);
app.use('/*', setCORS);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/people', peopleRouter);
app.use('/*', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
