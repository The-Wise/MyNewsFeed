const mongodb = require('mongodb'),
  mongoClient = mongodb.MongoClient,
  ObjectId = mongodb.ObjectID,
  connectionString = 'mongodb://localhost:27017/MusicRocksMyWorld-Db';

module.exports = () => ({
  connect() {
    return mongoClient.connect(connectionString);
  },
  ObjectID: ObjectId,
});
