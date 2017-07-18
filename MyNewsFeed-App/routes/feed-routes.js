const categoriesController = require('../controllers/categories-controller');
const feedContoller = require('../controllers/feed-controller');

module.exports = (router) => {
  router
        .get('/category/:category', categoriesController.loadCategoryPage)
        .get('/category/:category/:feedname/:feedurl',
            feedContoller.loadFeedPage)
        .get('/category/:category/:feedname/:feedurl/:articleurl',
            feedContoller.loadArticlePage);
};
