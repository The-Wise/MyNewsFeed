const categoriesController = require('../controllers/categories-controller');

module.exports = (router) => {
  router.get('/category/:category', categoriesController.loadCategoryPage);
  // router.get('/category/:category/:feed', feedContoller.getFeed);
};
