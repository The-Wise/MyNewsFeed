const authenticationController = require('../controllers/authentication-controller.js')(),
  passport = require('passport');

module.exports = function (router) {
  router.get('/login', authenticationController.loadLoginPage)
       .get('/signup', authenticationController.loadSignupPage)
       .get('/logout', authenticationController.logout)
       .post('/signup', authenticationController.signup)
       .post('/login', passport.authenticate('local', { session: true }),
                       authenticationController.login);
};
