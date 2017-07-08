const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, data) {
  const localStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    data.findUserByUsername(username)
        .then(user => {
          if (!user) {
            return done(null, false, req.flash('loginMessage', 'No user found.'));
          }

          if (password !== user.password) {
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
          }

          return done(null, user);
        })
        .catch((err) => done(null, false, {
          success: false,
          message: 'Incorrect username',
        }));
  });

  passport.use('local', localStrategy);
};
