module.exports = function () {
  return {
    getUserProfile(req, res) {
      res.render('user-profile.pug', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
      });
    },
  };
};
