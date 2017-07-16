const homeController = require('../controllers/home-controller.js')();

module.exports = function (router) {
  router.get('/', homeController.loadHomePage);
};
