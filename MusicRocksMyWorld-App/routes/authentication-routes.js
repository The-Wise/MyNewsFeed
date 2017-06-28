const authenticationController = require('../controllers/authentication-controller.js')();

module.exports = function(app) {
    app.get('/login', authenticationController.loadLoginPage)
       .get('/signup', authenticationController.loadSignupPage);
};