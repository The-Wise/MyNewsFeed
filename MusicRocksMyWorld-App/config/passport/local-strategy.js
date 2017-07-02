const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, data) {
    passport.use(new LocalStrategy({ 
        usernameField: 'username', 
        passwordField: 'password',
        passReqToCallback: true
        },
        function(req, username, password, done) {

           data.findUserByUsername(username)
               .then(user => {

                    return done(null, user);
               })
               .catch((err) => {

                  return done(null, false, {
                       success: false,
                       message: "Incorrect username"
                   });

               });;
            
        }));
};