const localStorage = require('localStorage');

module.exports = function () {
  function isAuthenticated() {
    if (localStorage.getItem('username') !== null) {
      return true;
    }

    return false;
  }

  return {
    loadHomePage(req, res) {
      res.render('_layout.pug', {
        isAuthenticated: isAuthenticated(),
        username: localStorage.getItem('username'),
      });
    },
  };
};
