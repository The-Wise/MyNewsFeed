module.exports = function(app) {
    require('./home-routes.js')(app);
    require('./authentication-routes.js')(app);
}