// const userData = require('../data/user-data');
// const feedData = require('../data/feed-data.js');

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

// loadMyFeedsPage(req, res) {
// 	const username = req.user.username;
// 	const { userArticles, userFeeds } = Promise.resolve(this.userData.findUserByUsername(username));
// 	console.log(userArticles);
//         return Promise.all([
//             this.userData.findUserByUsername(username),
//             this.feedData.findFeedByName(userFeeds[0]),
//             ])
//             .then(([_, articles]) => {
//                 res.render('./user/my-feed.pug', {
//                 isAuthenticated: req.isAuthenticated(),
//                 user: req.user,
//                 isAdmin: () => {
//                 return req.user.admin;
//                 },
//                 articles,
//                 userFeeds,
//                 userArticles,
//                 });
//             });
// }

// loadMyFeedsPage(req, res) {
// 	const username = req.user.username;
// 	this.userData.findUserByUsername(username));
//     .then((user) => {

// 		this.feedData.findFeedByName(user.userFeeds[0])
//             .then(([_, articles]) => {
//                 res.render('./user/my-feed.pug', {
//                 isAuthenticated: req.isAuthenticated(),
//                 user: req.user,
//                 isAdmin: () => {
//                 return req.user.admin;
//                 },
//                 articles,
//                 userFeeds,
//                 userArticles,
//                 });
//             }))
//             ;
// }

saveArticle(req, res) {
    const article = req.body;
    const username = req.user.username;
    this.userData.addArticleToUser(username, article);
}

removeArticle(req, res) {
    const article = req.body;
    const username = req.user.username;
    this.userData.removeArticleFromUser(username, article);
}

followFeed(req, res) {
    const feed = req.body;
    const username = req.user.username;
    this.userData.addFeedToUser(username, feed);
}

unfollowFeed(req, res) {
    const feed = req.body;
    const username = req.user.username;
    this.userData.removeFeedFromUser(username, feed);
}
}

module.exports = UserController;
