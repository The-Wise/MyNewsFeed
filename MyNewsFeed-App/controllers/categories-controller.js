const feedData = require('../data/feed-data');


const loadCategoryPage = (req, res) => {
    const name = req.params.category;
    feedData.findCategoryByName(name)
    .then((category) => {
        res.render('./feed/category-page.pug', {
        name: category.name,
        feeds: category.feeds,
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        isAdmin: () => {
        return req.user.admin;
    },
    });
    });
};

module.exports = {
    loadCategoryPage,
};
