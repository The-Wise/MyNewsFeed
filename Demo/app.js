var express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express(),
    port = '8080';

app.set("view engine", "pug");
app.set('views', './views/');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(expressSession({ secret: 'mrmw', resave: true, saveUninitialized: true, cookie: { secure: false, maxAge: 2160000000 } }));

//passport config
require('./config/passport.js')(app);

// routes
require('./routes/index.js')(app);

app.listen(port, () => {
  console.log('Server is running on port ' + port + '.');
});
