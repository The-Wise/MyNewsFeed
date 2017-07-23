const dbc = require('./database-connection.js');
const User = require('../models/user-model.js');
const conn = dbc.connect();
const ObjectId = dbc.ObjectId;

const createUser = (fullName, username, email, password, urlProfilePicture) => {
  return new Promise((resolve, reject) => {
      const currentDate = new Date().toDateString();
      const user = new User(fullName, username,
          email, password, urlProfilePicture, currentDate)
                .toObject();

      conn.then((db) => {
        db.collection('users')
          .save(user)
          .catch((err) => console.log(err));
      });
   });  
};

const findUserById = (id) => {
      return new Promise((resolve, reject) => {
        const userObjectId = new ObjectId(id);

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
};

const findUserByUsername = (username) => {
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
};


module.exports = function() {
  return {
    createUser,
    findUserById,
    findUserByUsername
  };
};
