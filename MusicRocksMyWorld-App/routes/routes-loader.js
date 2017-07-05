module.exports = function (Router, app) {
  const router = new Router();

  require('./user-routes.js')(router);
  require('./authentication-routes.js')(router);
  require('./home-routes.js')(router);

  app.use(router);
};
