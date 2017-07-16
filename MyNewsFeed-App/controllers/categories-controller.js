const feedData = require('../data/feed-data');


const loadCategoryPage = (req, res) => {
    const name = req.params.category;
    feedData.findCategoryByName(name)
    .then((category) => {
        res.render('./feed/category-page.pug', {
        feeds: category.feeds,
    });
    });
};

module.exports = {
    loadCategoryPage,
};
