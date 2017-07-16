const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectID;
const connectionString = 'mongodb://localhost:27017/MusicRocksMyWorld-Db';

const connect = () => mongoClient.connect(connectionString);

module.exports = {
  connect,
  ObjectId,
};
