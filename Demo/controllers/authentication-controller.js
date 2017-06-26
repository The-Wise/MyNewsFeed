const data = require('../data/user-data.js')();

module.exports = function() {
    return {
        loadLoginPage(req, res) {
            res.render('login.pug');
        },

        loadSignUpPage(req, res) {
            res.render('signup.pug');
        },

        signUp(req, res) {
            let username = req.body.username,
                email = req.body.email,
                name = req.body.name,
                password = req.body.password;

            console.log('asdasd');
            
            data.createUser(username, name, email, password);
        }   
    }
}