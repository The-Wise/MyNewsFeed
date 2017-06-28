var express = require('express'),
    app = express(),
    port = '8080';

app.set('view engine', 'pug');
app.set('views', './views/');

app.use(express.static(__dirname + '/public'));

// load routes
require('./routes/routes-loader.js')(app);

app.listen(port, () => {
    console.log('Server is running on port ' + port + '.');
});