const HomeController = require('../controllers/home-controller');

module.exports = function(router, data) {
	const homeController = new HomeController(data);

	router
		// .get('/', homeController.loadHomePage);
		.get('/', (req, res) => homeController.loadHomePage(req, res));
};
