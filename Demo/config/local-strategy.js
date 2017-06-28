const LocalStrategy = require('passport-local');

module.exports = function(passport, data) {
    passport.use('local-login', new LocalStrategy({
        username: 'username',
        password: 'password',
        passReqToCallback: true
    }, function(req, username, password, done) {
            data.findUserByUsername(username)
                .then(user => {
                    if (!user) {
                        return done(null, false);
                    }

                    return done(null, user);
                })
                .catch(() => {

                    done(null, false, {
                        success: false,
                        message: "Incorrect username"
                    });
                });
    }));
};