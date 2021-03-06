/* globals __dirname */

const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const { Router } = require('express');
const path = require('path');

module.exports = function(data) {
  const app = express();

  app.set('view engine', 'pug');
  app.set('views', './views/');

  const libsPath = path.join(__dirname, '../node_modules');
  app.use('/libs', express.static(libsPath));

  const staticsPath = path.join(__dirname, '../public');
  app.use('/static', express.static(staticsPath));

  app.use(cookieParser('mrmw'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(expressSession({
    secret: 'mrmw',
    cookie: { maxAge: 60 * 60 * 60 * 1000 },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  }));
  app.use(flash());
  app.use(expressValidator());

    // passport config
  require('./passport/passport.js')(app, data);

    // load routes
  require('../routes/routes-loader.js')(Router, app, data);

  require('./security')(app);

  return app;
};
