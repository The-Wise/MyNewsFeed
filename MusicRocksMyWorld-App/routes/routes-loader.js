module.exports = function (Router, app) {
  const router = new Router();

  require('./authentication-routes.js')(router);
  require('./home-routes.js')(router);

  app.use('/', router);
};
