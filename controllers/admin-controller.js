class AdminController {
    constructor(data) {
        this.feedData = data.feeds;
        this.usersData = data.users;
    }

    loadAddForm(req, res) {
        return this.feedData
                   .getAllCategories()
                   .then((categories) => {
                       res.render('./admin/add-form.pug', {
                           isAuthenticated: req.isAuthenticated(),
                           user: req.user,
                           isAdmin: () => {
                           return req.user.admin;
                           },
                           categories,
                           message: req.flash(),
                       });
        });
    }

    loadManageUsersPage(req, res) {
       this.usersData
           .getAllUsers()
           .then((users) => {
                res.render('./admin/manage-users.pug', {
                    isAuthenticated: req.isAuthenticated(),
                    user: req.user,
                    isAdmin: () => {
                        return req.user.admin;
                    },
                    users: users,
                });
           });
    }


    addNewCategory(req, res) {
        const name = req.body.category;
        if (name === '') {
            req.flash('error', 'Category name can\'t be empty');
            res.redirect('/admin/edit');
        }
        this.feedData.findCategoryByName(name)
        .then((categoryId) => {
            if (categoryId) {
            req.flash('error', 'Category already exists');
            res.redirect('/admin/edit');
        } else {
            this.feedData.addNewCategory(name)
            .then((result) => {
                req.flash('success', 'Category ' + result.ops[0].name + ' added');
                res.redirect('/admin/edit');
            });
        }
        })
        .catch((err) => {
                req.flash('error', err);
                res.redirect('/admin/edit');
            });
    }

    addNewFeed(req, res) {
        const category = req.body.category;
        const title = req.body.title;
        const url = req.body.url;
        const image = req.body.image;
        const description = req.body.description;
        // validate
        this.feedData.findCategoryByName(category)
        .then((cat) => {
            this.feedData.addNewFeed(cat.name, cat._id, title, url, image, description)
                .then((result) => {
                    req.flash('success', 'Feed added');
                    res.redirect('/admin/edit');
                })
                .catch((err) => {
                    console.log(err);
                    req.flash('error', 'Error');
                    res.redirect('/admin/edit');
                });
                }
        );
    }

    deleteCategoryFeed(req, res) {
        const category = req.params.categoryid;
        const feed = req.params.feedid;
        this.feedData.deleteItem(category, feed)
            .then((result) => {
                if (result === 1) {
                    req.flash('success', 'Category deleted!');
                    res.redirect('/admin/edit');
                } else if (result > 1) {
                    req.flash('success', 'Feed deleted!');
                    res.redirect('/admin/edit');
                } else {
                    req.flash('error', 'Unsuccessful deletion!');
                    res.redirect('/admin/edit');
                }
            });
    }
}

module.exports = AdminController;
