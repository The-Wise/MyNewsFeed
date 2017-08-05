const User = require('../models/user-model.js').User;
const ObjectId = require('./database-connection.js').ObjectID;

class UserData {
    constructor(db) {
        this.db = db;
    }

    createUser(fullName, username, email, password, urlProfilePicture) {
        const user = new User(fullName, username,
            email, password, urlProfilePicture, false)
                  .toObject();

        return this.db.collection('users')
            .save(user)
            .catch((err) => console.log(err));
    }

    findUserById(id) {
      const userObjectId = new ObjectId(id);

        return this.db
          .collection('users')
          .findOne({ _id: userObjectId })
          .then((user) => {
            return user;
          })
          .catch((err) => console.log('User not found'));
  }

    findUserByUsername(username) {
          return this.db
            .collection('users')
            .findOne({ username })
            .then((user) => {
              return user;
            })
            .catch((err) => console.log('User not found'));
    }

    addFeedToUser(username, feed) {
          return this.db
            .collection('users')
            .updateOne({ username }, { $addToSet: { userFeeds: feed } } )
            .then((result) => {
              return result.result.nModified;
            })
            .catch((err) => console.log(err));
    }

    removeFeedFromUser(username, feedname) {
      return this.db
        .collection('users')
        .updateOne({ username }, { $pull: { userFeeds: { feedName: feedname } } })
        .then((result) => {
          return result.result.nModified;
        })
        .catch((error) => console.log(error));
    }

    addArticleToUser(username, article) {
          return this.db
            .collection('users')
            .updateOne({ username }, { $addToSet: { userArticles: article } })
            .then((result) => {
                return result.result.nModified;
            })
            .catch((err) => console.log(err));
    }

    removeArticleFromUser(username, articletitle) {
      return this.db
        .collection('users')
        .findOneAndUpdate({ username }, { $pull: { userArticles: { articleTitle: articletitle } } }, { projection: { '_id': 0, 'userFeeds': 1, 'userArticles': 1 }, returnOriginal: false } )
        .then((user) => {
          return user.value;
        })
        .catch((error) => console.log(error));
    }

    getAllUsers() {
      return this.db
                 .collection('users')
                 .find({})
                 .toArray();
    }
}

module.exports = UserData;
