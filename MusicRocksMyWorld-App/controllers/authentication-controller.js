const data = require('../data/user-data.js')();
const localStorage = require('localStorage');

module.exports = function() {
    function saveUserToLocalStоrage(username, name, email) {
        localStorage.setItem('username', username);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }

    function removeUserFromTheLocalStorage() {
            localStorage.removeItem('username');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
    }

    return {
        loadLoginPage(req, res) {
            res.render('login.pug');
        },

        loadSignupPage(req, res) {

            res.render('signup.pug');
        },

        signup(req, res) {
            let username = req.body.username,
                name = req.body.name,
                email = req.body.email,
                password = req.body.password;

            data.createUser(username, name, email, password);

            res.redirect('/login');
        },

        login(req, res) {
            saveUserToLocalStоrage(req.user.username, req.user.name, req.user.email);

            res.redirect('/');
        },

        logout(req, res) {
            removeUserFromTheLocalStorage();

            req.logout();
            res.redirect('/');
        }
    }
}