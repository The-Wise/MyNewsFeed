const dbc = require('./database-connection');
const connect = dbc.connect();
const { Category } = require('../models/category-model');
const { Feed } = require('../models/feed-model');

const findCategoryByName = (name) => {
    return new Promise((resolve, reject) => {
        connect
        .then((db) => {
            const collection = db.collection('feeds');
            collection
            .findOne({ name }, (err, category) => {
                if (err) {
                    reject(err);
                }
                resolve(category);
            });
        });
    });
};

const getAllCategoryNames = () => {
    return new Promise((resolve, reject) => {
        connect
        .then((db) => {
            db
            .collection('feeds')
            .find({})
            .toArray((err, categories) => {
                if (err) {
                    reject('No categories');
                }
                resolve(categories.map((category) => {
                    return category.name;
                }));
            });
        });
    });
};

const addNewCategory = (name) => {
    // return new Promise((resolve, reject) => {
        const category = new Category(name).toObject();
        connect
        .then((db) => {
            db
            .collection('feeds')
            .insertOne(category)
            .catch((err) => console.log(err));
        });
    // });
};

const addNewFeed = (category, title, url, image, description) => {
    // return new Promise((resolve, reject) => {
        const feed = new Feed(title, url, image, description).toObject();
        connect
        .then((db) => {
            db
            .collection('feeds')
            .updateOne({ name: category }, { $push: { feeds: feed } })
            .catch((err) => console.log(err));
        });
    // });
};

module.exports = {
    findCategoryByName,
    getAllCategoryNames,
    addNewCategory,
    addNewFeed,
};
