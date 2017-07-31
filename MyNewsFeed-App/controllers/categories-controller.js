class CategoriesController {
    constructor(data) {
        this.feedData = data.feeds;
    }

    loadCategoryPage(req, res) {
        const name = req.params.category;
        this.feedData.findCategoryByName(name)
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
    }
}

module.exports = CategoriesController;
