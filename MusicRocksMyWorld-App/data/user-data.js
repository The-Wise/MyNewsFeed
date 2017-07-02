const conn = require('./database-connection.js')();

module.exports = function () {
  return {
    createUser(username, name, email, password) {
      const user = {
        username,
        name,
        email,
        password,
      };

      conn.then(db => {
        db.collection('users')
          .save(user)
          .catch(err => console.log(err));
      });
    },

    findUserById(id) {
      return new Promise((resolve, reject) => {
        conn.then(db => {
          db.collection('users')
            .find({ _id: id })
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
        conn.then(db => {
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
