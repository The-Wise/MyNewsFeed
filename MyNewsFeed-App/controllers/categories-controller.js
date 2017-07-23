const feedData = require('../data/feed-data');


const loadCategoryPage = (req, res) => {
    const name = req.params.category;
    // console.log(name);
    feedData.findCategoryByName(name)
        .then((category) => {
            // console.log(category);
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
        // .catch((err) => console.log(err));
};

module.exports = {
    loadCategoryPage,
};
