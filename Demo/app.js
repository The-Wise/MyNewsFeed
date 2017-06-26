var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = '8080';

app.set("view engine", "pug");
app.set('views', './views/');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// routes
require('./routes/index.js')(app);

app.listen(port, () => {
  console.log('Server is running on port ' + port + '.');
});
