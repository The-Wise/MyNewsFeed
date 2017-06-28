const authenticationController = require('../controllers/authentication-controller.js')(),
      passport = require('passport');

module.exports = function(app) {
    app.get('/login', authenticationController.loadLoginPage)
       .get('/signup', authenticationController.loadSignUpPage)
       .post('/signup', authenticationController.signUp)
       .post('/login', passport.authenticate('local-login'),
                     (req, res) => res.redirect('/'));
};