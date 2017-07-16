const userController = require('../controllers/user-controller.js');


module.exports = function(router, isAuthenticated) {
  router
    .get('/:username/profile', isAuthenticated, userController.getUserProfile);
    // .get('/myFeeds', isAuthenticated, userController.getUserFeeds);
};
