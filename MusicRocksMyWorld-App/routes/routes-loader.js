module.exports = function(Router, app) {
    var router = new Router();

    require('./authentication-routes.js')(router);
    require('./home-routes.js')(router);

    app.use('/', router);
}