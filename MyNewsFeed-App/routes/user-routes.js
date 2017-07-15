const userController = require('../controllers/user-controller.js')();

module.exports = function (router) {
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      throw new Error('Not Authenticated');
    }
  }

  router.get('/:username/profile', isAuthenticated, userController.getUserProfile)
        .get('/myFeeds', isAuthenticated, userController.getUserFeeds);
};
