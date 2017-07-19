/* globals __dirname */

const app = require('./config/app.js')();
// const express = require('express');

// app.use('/static', express.static(__dirname + '/public'));

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}.`);
});
