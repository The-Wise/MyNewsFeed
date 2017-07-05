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
            done(null, false);
          }

          done(null, user);
        })
        .catch((err) => done(null, false, {
          success: false,
          message: 'Incorrect username',
        }));
  });

  passport.use(localStrategy);
};
