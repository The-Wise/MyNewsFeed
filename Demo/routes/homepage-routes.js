const homeController = require('../controllers/home-controller.js')();

module.exports = function(app) {
    app.get('/', homeController.loadHomePage);
};