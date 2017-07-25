const UserController = require('../controllers/user-controller.js');

module.exports = function(router, isAuthenticated, data) {
  const userController = new UserController(data);

  router
    .get('/:username/profile',
        isAuthenticated, (req, res) => userController.getUserProfile(req, res))
    .get('/:username/myfeeds',
        isAuthenticated, (req, res) => userController.loadMyFeedsPage(req, res))
    .post('/:username/followfeed',
        isAuthenticated, (req, res) => userController.followFeed(req, res))
    .post('/:username/addarticle',
        isAuthenticated, (req, res) => userController.saveArticle(req, res));
};
