const app = require('./config/app.js')(),
      express = require('express');

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log('Server is running on port ' + 8080 + '.');
});