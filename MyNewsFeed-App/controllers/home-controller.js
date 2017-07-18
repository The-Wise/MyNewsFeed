module.exports = function() {
  return {
    loadHomePage(req, res) {
      console.log(req.flash('loginMessage'));
      res.render('home-page.pug', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        isAdmin: () => {
          if (req.user) {
            return req.user.admin;
          }
        },
        message: req.flash('loginMessage') || null,
      });
    },
  };
};
