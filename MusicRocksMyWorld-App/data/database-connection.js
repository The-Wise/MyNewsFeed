const mongoClient = require('mongodb').MongoClient,
      connectionString = 'mongodb://localhost:27017/MusicRocksMyWorld-Db';

module.exports = function() { return mongoClient.connect(connectionString); }