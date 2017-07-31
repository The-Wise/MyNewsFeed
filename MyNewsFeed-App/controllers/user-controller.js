class UserController {
    constructor(data) {
        this.feedData = data.feeds;
        this.userData = data.users;
    }

getUserProfile(req, res) {
    res.render('./user/user-profile.pug', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user,
      isAdmin: () => {
        return req.user.admin;
      },
  });
}

loadMyFeedsPage(req, res) {
	const username = req.user.username;
	this.userData.findUserByUsername(username)
    .then((user) => {
		const articles = user.userArticles;
        const feeds = user.userFeeds;

		res.render('./user/my-feed.pug', {
		isAuthenticated: req.isAuthenticated(),
		user: req.user,
		isAdmin: () => {
		return req.user.admin;
		},
		feeds,
		articles,
		});
	});
}

saveArticle(req, res) {
    const article = req.body;
    const username = req.user.username;
    this.userData.addArticleToUser(username, article);
}

// removeArticle(req, res) {
//     const article = req.body;
//     const username = req.user.username;
//     this.userData.removeArticleFromUser(username, article);
// }

followFeed(req, res) {
    const feed = req.body;
    const username = req.user.username;
    this.userData.addFeedToUser(username, feed);
}

// unfollowFeed(req, res) {
//     const feed = req.body;
//     const username = req.user.username;
//     this.userData.removeFeedFromUser(username, feed);
// }
}

module.exports = UserController;
