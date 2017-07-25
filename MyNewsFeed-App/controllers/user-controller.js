const getUserProfile = (req, res) => {
  res.render('./user/user-profile.pug', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user,
    isAdmin: () => {
      return req.user.admin;
    },
  });
};

const getUserFeeds = (req, res) => {
      res.render('not-implemented', {
       isAuthenticated: req.isAuthenticated(),
       user: req.user,
       isAdmin: () => req.user.admin,
      });
};

module.exports = {
  getUserProfile,
  getUserFeeds
};
