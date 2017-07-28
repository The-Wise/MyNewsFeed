const validator = require('../utils/validator.js');

class AuthenticationController {
      constructor(data) {
            this.userData = data.users;
      }

      loadLoginPage(req, res) {
            res.render('./user/login.pug', { message: req.flash() });
      }

      loadSignupPage(req, res) {
            res.render('./user/signup.pug');
      }

      signup(req, res) {
            const username = req.body.username;
            const fullname = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const urlProfilePicture = req.body.urlProfilePicture;

            const errors = validator.validateRegisterForm(req, res);

            if (errors) {
                return res.render('user/signup', {
                      errors,
                });
            }

            this.userData
                .createUser(fullname, username, email, password, urlProfilePicture)
                .then(() => {
                  req.flash('success', 'Registered!');
                  res.redirect('/login');
                });
      }

      login(req, res) {
            res.redirect('/');
      }

      logout(req, res) {
            req.logout();
            req.flash('success', 'Logged out!');
            res.redirect('/');
      }
}

module.exports = AuthenticationController;
