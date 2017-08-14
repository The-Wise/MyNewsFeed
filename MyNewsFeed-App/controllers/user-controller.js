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
    this.userData.addArticleToUser(username, article)
        .then((result) => {
            if (result === 1) {
                res.sendStatus(200);
            }
            if (result === 0) {
                res.sendStatus(418);
            }
        });
}

removeArticle(req, res) {
    const articletitle = req.body.articleTitle;
    const username = req.user.username;
    this.userData.removeArticleFromUser(username, articletitle)
        .then((result) => {
        if (result) {
            res.sendStatus(200);
        }
        if (result === null) {
            res.sendStatus(418);
        }
    });
    // .then((user) => {
    //     const articles = user.userArticles;
    //     const feeds = user.userFeeds;
	// 	res.render('./user/my-feed.pug', {
	// 	isAuthenticated: req.isAuthenticated(),
	// 	user: req.user,
	// 	isAdmin: () => {
	// 	return req.user.admin;
    //     },
    //     message: { 'success': 'Article removed' },
	// 	feeds,
	// 	articles,
	// 	});
    // });
}

followFeed(req, res) {
    const feed = req.body;
    const username = req.user.username;
    this.userData.addFeedToUser(username, feed)
    .then((result) => {
        if (result === 1) {
            res.sendStatus(200);
        }
        if (result === 0) {
            res.sendStatus(418);
        }
    });
}

unfollowFeed(req, res) {
    const feedname = req.body.feedName;
    const username = req.user.username;
    this.userData.removeFeedFromUser(username, feedname)
    .then((result) => {
        if (result === 1) {
            res.sendStatus(200);
        }
        if (result === 0) {
            res.sendStatus(418);
        }
    });
}
}

module.exports = UserController;
