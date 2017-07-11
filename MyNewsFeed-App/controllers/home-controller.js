const localStorage = require('localStorage');

module.exports = function () {
  return {
    loadHomePage(req, res) {
      res.render('home-page.pug', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
      });
    },
  };
};
