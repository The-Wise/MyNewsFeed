const CategoriesController = require('../controllers/categories-controller');
const FeedContoller = require('../controllers/feed-controller');

module.exports = (router, data) => {
   const categoriesController = new CategoriesController(data);
   const feedContoller = new FeedContoller(data);

   router
        .get('/category/:category', (req, res) => categoriesController.loadCategoryPage(req, res))
        .get('/category/:category/:feedname/:feedurl',
            (req, res) => feedContoller.loadFeedPage(req, res))
            .get('/category/:category/:feedname/:feedurl/refresh',
            (req, res) => feedContoller.refreshFeed(req, res))
        .get('/category/:category/:feedname/:feedurl/:articleid',
            (req, res) => feedContoller.loadArticlePage(req, res));
};
