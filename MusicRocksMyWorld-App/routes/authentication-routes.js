const authenticationController = require('../controllers/authentication-controller.js')(),
      passport = require('passport');

module.exports = function(app) {
    app.get('/login', authenticationController.loadLoginPage)
       .get('/signup', authenticationController.loadSignupPage)
       .post('/signup', authenticationController.signup)
       .post('/login', passport.authenticate('local-login'),
                       authenticationController.login);;
};