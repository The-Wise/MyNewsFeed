/* globals __dirname */
// const express = require('express');

// app.use('/static', express.static(__dirname + '/public'));

const start = () => {
    return Promise.resolve();
};

start()
    .then(() => require('./data/database-connection').init())
    .then((db) => require('./data/data').init(db))
    .then((data) => require('./config/app')(data))
    .then((app) => {
      app.listen(8080, () => {
        console.log(`Server is running on port ${8080}.`);
      });
    });
