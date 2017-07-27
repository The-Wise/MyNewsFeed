
class HomeController {
  constructor(data) {
    this.feedData = data.feeds;
  }

  loadHomePage(req, res) {
        this.feedData.getLatestArticles()
        .then((articles) => {
          res.render('home-page.pug', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            isAdmin: () => {
              return req.user.admin;
            },
            message: req.flash(),
            articles,
            });
        });
      }
}

module.exports = HomeController;
