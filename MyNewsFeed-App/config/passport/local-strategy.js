const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, data) {
  const localStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    data.findUserByUsername(username)
        .then((user) => {
          if (!user) {
            return done(null, false, req.flash('error', 'No user found.'));
          }

          if (password !== user.password) {
            return done(null, false, req.flash('error', 'Oops! Wrong password.'));
          }

          return done(null, user, req.flash('success', 'Logged in!'));
        })
        .catch((err) => done(null, false, {
          success: false,
          message: 'Incorrect username',
        }));
  });

  passport.use('local', localStrategy);
};
