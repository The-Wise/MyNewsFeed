const passport = require('passport'),
      data = require('../data/user-data.js')();

module.exports = function(app) {

    passport.serializeUser((user, done) => {
        console.log('serializeUser');

        if (user) {
            return done(null, user._id);
        }

        return done(null, false);
    });

    passport.deserializeUser((userId, done) => {
        data.findUserById(userId)
            .then((user) => {
                console.log('deserializeUser');

                if (user) {
                    return done(null, user);
                }

                return done(null, false );
            
        })
        .catch(err => console.log(err));
    });

    require('./local-strategy.js')(passport, data);

    app.use(passport.initialize());
    app.use(passport.session());
};  