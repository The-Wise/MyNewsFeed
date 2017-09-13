module.exports = function(Router, app, data) {
  const router = new Router();

  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.sendStatus(401);
    }
  }

  require('./user-routes')(router, isAuthenticated, data);
  require('./authentication-routes')(router, isAuthenticated, data);
  require('./home-routes')(router, data);
  require('./feed-routes')(router, data);
  require('./admin-routes')(router, isAuthenticated, data);

  app.use(router);
};
