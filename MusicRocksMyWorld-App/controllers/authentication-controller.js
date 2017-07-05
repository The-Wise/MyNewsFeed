const data = require('../data/user-data.js')();

module.exports = function () {
  return {
    loadLoginPage(req, res) {
      res.render('login.pug');
    },

    loadSignupPage(req, res) {
      res.render('signup.pug');
    },

    signup(req, res) {
      const username = req.body.username,
        name = req.body.name,
        email = req.body.email,
        password = req.body.password;

      data.createUser(username, name, email, password);

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
