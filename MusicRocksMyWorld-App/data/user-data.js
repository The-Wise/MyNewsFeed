const conn = require('./database-connection.js')();

module.exports = function() {
    return {
        createUser(username, name, email, password) {
            let user = {
                username: username,
                name: name,
                email: email,
                password: password
            };

            conn.then(db => {
                db.collection('users')
                  .insert(user)
                  .catch(err => console.log(err));
                
                console.log('THE USER IS CREATED');

                // db.collection('users')
                //   .find({ email: user.email })
                //    .toArray((err, user) => {
                //     console.log(user);
                //   });
            });
        },

        findUserById(id) {
          return new Promise((resolve, reject) => {
                 conn.then(db => {
                     db.collection('users')
                       .find({ _id: id })
                       .toArray((err, user) => {
                         if (err) {
                             throw 'User not found';
                         }
                     
                         resolve(user);
                       });
                     });
                 });
        },

        findUserByUsername(username) {
            return new Promise((resolve, reject) => {
                   conn.then(db => {
                       db.collection('users')
                         .find({ username: username })
                         .toArray((err, user) => {
                           if (err) {
                               throw 'User not found';
                           }
                       
                           resolve(user[0]);
                         });
                       });
                   });
        }
    }
};