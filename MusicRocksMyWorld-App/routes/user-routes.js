const userController = require('../controllers/user-controller.js')();

module.exports = function (router) {
  router.get('/:username/profile', userController.getUserProfile);
};
