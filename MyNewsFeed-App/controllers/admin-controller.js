const feedData = require('../data/feed-data');

function loadAddForm(req, res) {
  return feedData.getAllCategoryNames()
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

const addNewCategory = (req, res) => {
    const name = req.body.category;
    feedData.findCategoryByName(name)
    .then((result) => {
        if (result) {
        req.flash('error', 'Category already exists');
        res.redirect('/admin/edit');
    } else {
        feedData.addNewCategory(name);
        req.flash('success', 'Category added');
        res.redirect('/admin/edit');
    }
    });
};

const addNewFeed = (req, res) => {
    const category = req.body.category;
    const title = req.body.title;
    const url = req.body.url;
    const image = req.body.image;
    const description = req.body.description;
    // validate
    feedData.addNewFeed(category, title, url, image, description);
    req.flash('success', 'Feed added');
    res.redirect('/admin/edit');
};

module.exports = {
    loadAddForm,
    addNewCategory,
    addNewFeed,
};
