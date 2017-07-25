const AuthenticationController = require(
      '../controllers/authentication-controller.js');
const passport = require('passport');

module.exports = function(router, isAuthenticated, data) {
  const authenticationController = new AuthenticationController(data);
  
  router
      .get('/login', authenticationController.loadLoginPage)
      .get('/signup', authenticationController.loadSignupPage)
      .get('/logout', isAuthenticated, authenticationController.logout)
      .post('/signup', authenticationController.signup)
      .post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        passReqToCallback: true,
        failureFlash: true,
      }),
        authenticationController.login);
};
