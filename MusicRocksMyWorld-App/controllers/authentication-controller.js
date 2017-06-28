module.exports = function() {
    return {
        loadLoginPage(req, res) {
            res.render('login.pug');
        },

        loadSignupPage(req, res) {
            res.render('signup.pug');
        }
    }
}