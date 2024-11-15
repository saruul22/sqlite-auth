var express = require('express');
var path = require('path');
var sequelize = require('./database');

sequelize.sync().then(() => console.log('db is ready!'));

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
