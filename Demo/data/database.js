let mongoClient = require('mongodb').MongoClient,
    conString = 'mongodb://localhost:27017/demoMRMW';

module.exports = function() { return mongoClient.connect(conString) };