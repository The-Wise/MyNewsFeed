const adminController = require('../controllers/admin-controller');

module.exports = function(router, isAuthenticated) {
  router
    .get('/admin/edit', isAuthenticated, adminController.loadAddForm)
    .post('/admin/edit/addcategory', isAuthenticated,
      adminController.addNewCategory)
    .post('/admin/edit/addfeed', isAuthenticated,
      adminController.addNewFeed);
};
