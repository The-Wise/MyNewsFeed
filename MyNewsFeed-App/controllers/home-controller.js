module.exports = function() {
  return {
    loadHomePage(req, res) {
      res.render('home-page.pug', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user,
      isAdmin: () => {
        return req.user.admin;
      },
      message: req.flash(),
    });
    },
  };
};
