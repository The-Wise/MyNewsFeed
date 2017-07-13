module.exports = function (Router, app) {
  const router = new Router();
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      throw new Error('Not Authenticated');
    }
  }

  require('./user-routes.js')(router);
  require('./authentication-routes.js')(router, isAuthenticated);
  require('./home-routes.js')(router);

  app.use(router);
};
