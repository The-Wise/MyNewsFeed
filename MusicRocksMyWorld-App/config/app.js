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
  app.use(expressSession({ secret: 'mrmw', resave: true, saveUninitialized: false, cookie: { secure: false } }));
  app.use(flash());

    // passport config
  require('./passport/passport.js')(app);

    // load routes
  require('../routes/routes-loader.js')(Router, app);


  return app;
};
