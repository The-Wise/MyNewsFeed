const User = require('../models/user-model.js');
const ObjectId = require('./database-connection.js').ObjectID;

class UserData {
    constructor(db) {
        this.db = db;
    }

    createUser(fullName, username, email, password, urlProfilePicture) {
        const currentDate = new Date().toDateString();
        const user = new User(fullName, username,
            email, password, urlProfilePicture, currentDate)
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
              return result.nModified;
            })
            .catch((err) => console.log(err));
    }

    addArticleToUser(username, article) {
          return this.db
          .collection('users')
          .updateOne({ username }, { $addToSet: { userArticles: article } })
          .then((result) => {
              return result.nModified;
          })
          .catch((err) => console.log(err));
    }
}

module.exports = UserData;
