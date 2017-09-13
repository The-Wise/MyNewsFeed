const AuthenticationController = require(
      '../controllers/authentication-controller.js');
const passport = require('passport'),
      validator = require('../utils/validator.js');;

module.exports = function(router, isAuthenticated, data) {
  const authenticationController = new AuthenticationController(data, validator);
  
  router
      .get('/login', authenticationController.loadLoginPage)
      .get('/signup', authenticationController.loadSignupPage)
      .get('/logout', isAuthenticated, authenticationController.logout)
      .post('/signup', (req, res) => authenticationController.signup(req, res))
      .post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        passReqToCallback: true,
        failureFlash: true,
      }),
        authenticationController.login);
};
