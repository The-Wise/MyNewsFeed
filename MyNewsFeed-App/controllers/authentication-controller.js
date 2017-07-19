const data = require('../data/user-data.js')();

module.exports = function() {
  return {
    loadLoginPage(req, res) {
      res.render('./user/login.pug', { message: req.flash() });
    },

    loadSignupPage(req, res) {
      res.render('./user/signup.pug');
    },

    signup(req, res) {
      const username = req.body.username;
      const fullname = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const urlProfilePicture = req.body.urlProfilePicture;

      data.createUser(fullname, username, email, password, urlProfilePicture);
      req.flash('success', 'Registered!');
      res.redirect('/login');
    },

    login(req, res) {
      res.redirect('/');
    },

    logout(req, res) {
      req.logout();
      req.flash('success', 'Logged out!');
      res.redirect('/');
    },
  };
};
