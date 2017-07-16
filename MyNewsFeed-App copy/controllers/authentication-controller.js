const data = require('../data/user-data.js')();

module.exports = function () {
  return {
    loadLoginPage(req, res) {
      res.render('login.pug', { message: req.flash('loginMessage') });
    },

    loadSignupPage(req, res) {
      res.render('signup.pug');
    },

    signup(req, res) {
      const username = req.body.username,
        fullname = req.body.name,
        email = req.body.email,
        password = req.body.password,
        urlProfilePicture = req.body.urlProfilePicture;

      data.createUser(fullname, username, email, password, urlProfilePicture);

      res.redirect('/login');
    },

    login(req, res) {
      res.redirect('/');
    },

    logout(req, res) {
      req.logout();
      res.redirect('/');
    },
  };
};
