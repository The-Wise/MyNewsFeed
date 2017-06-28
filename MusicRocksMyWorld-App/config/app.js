var express = require('express'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    flash = require('connect-flash'),
    port = '8080';

module.exports = function() {

    let app = express();

    app.set('view engine', 'pug');
    app.set('views', './views/');

    app.use(cookieParser('mrmw'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(expressSession({ secret: 'mrmw', resave: true,  saveUninitialized: true}));
    app.use(flash());

    // passport config
    require('./passport/passport.js')(app);

    // load routes
    require('../routes/routes-loader.js')(app);

    return app;
};