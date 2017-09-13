const UserController = require('../controllers/user-controller.js');

module.exports = function(router, isAuthenticated, data) {
  const userController = new UserController(data);

  router
    .get('/:username/profile',
        isAuthenticated, (req, res) => userController.getUserProfile(req, res))
    .get('/:username/myfeeds',
        isAuthenticated, (req, res) => userController.loadMyFeedsPage(req, res))
    .put('/:username/followfeed',
        isAuthenticated, (req, res) => userController.followFeed(req, res))
    .put('/:username/addarticle',
        isAuthenticated, (req, res) => userController.saveArticle(req, res))
    .put('/:username/myfeeds/unfollowfeed',
        isAuthenticated, (req, res) => userController.unfollowFeed(req, res))
    .put('/:username/myfeeds/removearticle',
        isAuthenticated, (req, res) => userController.removeArticle(req, res));
};
