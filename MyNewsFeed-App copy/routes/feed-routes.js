const feedContoller = require('../controllers/feed-controller');

// const feedRoutes = (router) => {
//   router.get('/category/:category', feedContoller.loadCategory);
//   router.get('/category/:category/:feed', feedContoller.getFeed);
// };

// module.exports = {
//   feedRoutes,
// };

module.exports = (router) => {
  router.get('/category/:category', feedContoller.loadCategory);
  router.get('/category/:category/:feed', feedContoller.getFeed);
};
