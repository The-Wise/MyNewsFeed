const data = require('../data/user-data.js')(),
      validator = require('../utils/validator.js');

const loadLoginPage = (req, res) => {
      res.render('./user/login.pug', { message: req.flash() });
};

const loadSignupPage = (req, res) => {
      res.render('./user/signup.pug');
};

const signup = (req, res) => {
      const username = req.body.username;
      const fullname = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const urlProfilePicture = req.body.urlProfilePicture;

      var errors = validator.validateRegisterForm(req, res)

      if (errors) {
          return res.render("user/signup", {
                errors
          });
      }

      data.createUser(fullname, username, email, password, urlProfilePicture)
          .then(() => {
            req.flash('success', 'Registered!');
            res.redirect('/login');
          });
};

const login = (req, res) => {
      res.redirect('/');
};

const logout = (req, res) => {
      req.logout();
      req.flash('success', 'Logged out!');
      res.redirect('/');
};

module.exports = {
    loadLoginPage,
    loadSignupPage,
    signup,
    login,
    logout
};
