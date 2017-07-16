const dbc = require('./database-connection');
const connect = dbc.connect();
const Category = require('../models/');

const findCategoryByName = (name) => {
    return new Promise((resolve, reject) => {
        connect
        .then((db) => {
            db
            .collection('feeds')
            .find({ name })
            .toArray((err, categories) => {
                if (err) {
                    reject('Category not found');
                }
                resolve(categories[0]);
            });
        });
    });
};

const addNewCategory = (name) => {
    return new Promise((resolve, reject) => {
        const category = new Category(name).toObject();
        connect
        .then((db) => {
            db
            .collection('feeds')
            .insertOne(category)
            .catch((err) => console.log(err));
        });
    });
};

const addNewFeed = (category, name, feedUrl, imageUrl, description) => {
    return new Promise((resolve, reject) => {
        const feed = new Feed(name, feedUrl, imageUrl, description).toObject();
        connect
        .then((db) => {
            db
            .collection('feeds')
            .find()
            .insertOne(category)
            .catch((err) => console.log(err));
        });
    });
};

module.exports = {
    findCategoryByName,
    addNewCategory,
    addNewFeed,
};
