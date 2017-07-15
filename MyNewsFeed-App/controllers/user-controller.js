module.exports = function () {
  return {
    getUserProfile(req, res) {
      res.render('user-profile.pug', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        isAdmin: () => req.user.admin
      });
    },

    getUserFeeds(req, res) {
      res.render('not-implemented.pug', {
       isAuthenticated: req.isAuthenticated(),
       user: req.user,
       isAdmin: () => req.user.admin
      });
    } 
  };
};
