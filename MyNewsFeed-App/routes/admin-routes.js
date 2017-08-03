const AdminController = require('../controllers/admin-controller');

module.exports = function(router, isAuthenticated, data) {
  const controller = new AdminController(data);

  router
    .get('/admin/edit', isAuthenticated, (req, res) => controller.loadAddForm(req, res))
    .get('/admin/edit/deletecategory/:categoryid', isAuthenticated,
      (req, res) => controller.deleteCategoryFeed(req, res))
    .get('/admin/edit/deletefeed/:categoryid/:feedid', isAuthenticated,
      (req, res) => controller.deleteCategoryFeed(req, res))
    .get('/admin/manage/users', isAuthenticated,
      (req, res) => controller.loadManageUsersPage(req, res))
    .post('/admin/edit/addcategory', isAuthenticated,
      (req, res) => controller.addNewCategory(req, res))
    .post('/admin/edit/addfeed', isAuthenticated,
      (req, res) => controller.addNewFeed(req, res));
};
