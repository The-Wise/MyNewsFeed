const express = require('express'),
  expressSession = require('express-session'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash'),
  { Router } = require('express');

module.exports = function () {
  const app = express();

  app.set('view engine', 'pug');
  app.set('views', './views/');

  app.use(cookieParser('mrmw'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(flash());
  app.use(expressSession({
    secret: 'mrmw',
    cookie: { maxAge: 60 * 60 * 60 * 1000 },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  }));

    // passport config
  require('./passport/passport.js')(app);

    // load routes
  require('../routes/routes-loader.js')(Router, app);

  return app;
};

// API key for News api
// 2a69d47406c043479bdf3cb50e0f477f
