const dbc = require('./database-connection.js');
const User = require('../models/user-model.js');
const conn = dbc.connect();
const ObjectID = dbc.ObjectID;


module.exports = function() {
  return {
    createUser(fullName, username, email, password, urlProfilePicture) {
      const currentDate = new Date().toDateString();
      const user = new User(fullName, username,
          email, password, urlProfilePicture, currentDate)
                .toObject();

      conn.then((db) => {
        db.collection('users')
          .save(user)
          .catch((err) => console.log(err));
      });
    },

    findUserById(id) {
      return new Promise((resolve, reject) => {
        const userObjectId = new ObjectID(id);

        conn.then((db) => {
          db.collection('users')
            .find({ _id: userObjectId })
            .toArray((err, user) => {
              if (err) {
                reject('User not found');
              }

              resolve(user[0]);
            });
        });
      });
    },

    findUserByUsername(username) {
      return new Promise((resolve, reject) => {
        conn.then((db) => {
          db.collection('users')
            .find({ username })
            .toArray((err, user) => {
              if (err) {
                reject('User not found');
              }

              resolve(user[0]);
            });
        });
      });
    },
  };
};
