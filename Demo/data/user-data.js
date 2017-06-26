const connection = require('./database.js')(),
      User = require('../models/user-model.js');

module.exports = function() {
    return {
        createUser(username, name, email, password) {
            // This code is not wokring but does not throw a excpetion LOL :O;
            
            var user = new User(username, name, email, password);

            connection.then(db => {
                db.collection('users').insertOne(user).then(x => console.log(x.ops));
            });
        }
    }
}