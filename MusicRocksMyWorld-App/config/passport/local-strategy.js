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
                    return done(null, false, req.flash('signupMessage', 'Невалидно потребителско име'));
                }
                console.log(user);
                return done(null, user);
            })
            .catch((err) => {
                console.log(err);

                done(null, false, {
                    success: false,
                    message: "Incorrect username"
                });
            });;
    }));
};