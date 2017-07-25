const userController = require('../controllers/user-controller.js');


module.exports = function(router, isAuthenticated) {
  router
    .get('/:username/profile', isAuthenticated, userController.getUserProfile)
    .get('/add-feed/:feedtitle', isAuthenticated, () => console.log('nice'))
    .get('/myFeeds', isAuthenticated, userController.getUserFeeds);
};
