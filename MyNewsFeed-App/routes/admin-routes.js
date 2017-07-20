const adminController = require('../controllers/admin-controller');

module.exports = function(router, isAuthenticated) {
  router
    .get('/admin/edit', isAuthenticated, adminController.loadAddForm)
    .get('/admin/edit/deletecategory/:categoryid', isAuthenticated,
      adminController.deleteCategoryFeed)
    .get('/admin/edit/deletefeed/:categoryid/:feedid', isAuthenticated,
      adminController.deleteCategoryFeed)
    .post('/admin/edit/addcategory', isAuthenticated,
      adminController.addNewCategory)
    .post('/admin/edit/addfeed', isAuthenticated,
      adminController.addNewFeed);
};
