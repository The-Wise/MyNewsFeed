const AdminController = require('../controllers/admin-controller');

module.exports = function(router, isAuthenticated, data) {
  const adminController = new AdminController(data);

  router
    .get('/admin/edit', isAuthenticated, (req, res) => adminController.loadAddForm(req, res))
    .get('/admin/edit/deletecategory/:categoryid', isAuthenticated,
      (req, res) => adminController.deleteCategoryFeed(req, res))
    .get('/admin/edit/deletefeed/:categoryid/:feedid', isAuthenticated,
      (req, res) => adminController.deleteCategoryFeed(req, res))
    .get('/admin/manage/users', isAuthenticated,
      (req, res) => adminController.loadManageUsersPage(req, res))
    .post('/admin/edit/addcategory', isAuthenticated,
      (req, res) => adminController.addNewCategory(req, res))
    .post('/admin/edit/addfeed', isAuthenticated,
      (req, res) => adminController.addNewFeed(req, res));
};
