const connection = require('./database.js')(),
      User = require('../models/user-model.js');

module.exports = function() {
    return {
        createUser(user) {
            connection.then(db => {
               db.collection('users').insert(user).then(x => console.log(x.ops));
            });
        },


        findUserById(userId) {
            return new Promise((res, rej) => {
                    connection.then(db => {
                          db.collection('users')
                            .find({_id: userId })
                            .toArray((err, user) => {
                                if (err) {
                                    return err;
                                }
                            
                                res(user);
                            });
                        });
            });
        },

        findUserByUsername(username) {
            return new Promise((res, rej) => {
                 connection.then(db => {
                               db.collection('users')
                                 .find({ username })
                                 .toArray(function(err, user) {
                                            if (err) {
                                                return err;
                                            }
                                        
                                            res(user[0]);
                                 });
                            });
            });
        }
    }
}