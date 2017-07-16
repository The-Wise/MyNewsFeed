module.exports = function(Router, app) {
  const router = new Router();
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      throw new Error('Not Authenticated');
    }
  }

  require('./user-routes')(router, isAuthenticated);
  require('./authentication-routes')(router, isAuthenticated);
  require('./home-routes')(router);
  require('./feed-routes')(router);
  require('./admin-routes')(router, isAuthenticated);
  // require('./categories-routes')(router);

  app.use(router);
};
