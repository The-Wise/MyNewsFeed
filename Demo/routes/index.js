module.exports = function(app) {
    require('./homepage-routes.js')(app);
    require('./authentication-routes.js')(app);    
};