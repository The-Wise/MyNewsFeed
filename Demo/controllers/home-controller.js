module.exports = function(db) {
    return {
        loadHomePage(req, res) {
            res.render('_layout.pug');
        }
    }
}