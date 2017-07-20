const dbc = require('./database-connection');
const connect = dbc.connect();
const { Category } = require('../models/category-model');
const { Feed } = require('../models/feed-model');
const ObjectId = dbc.ObjectId;

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

const getAllCategories = () => {
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
                resolve(categories);
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
            .insertOne(category, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    });
};

const addNewFeed = (category, title, url, image, description) => {
    return new Promise((resolve, reject) => {
        const feed = new Feed(title, url, image, description).toObject();
        connect
        .then((db) => {
            db
                .collection('feeds')
                .updateOne({ name: category }, { $push: { feeds: feed } },
                    (err, result) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(result);
                });
        });
    });
};

const deleteItem = (itemId, subItemId) => {
    return new Promise((resolve, reject) => {
        const itemObjectId = new ObjectId(itemId);
        if (!subItemId) {
            connect
                .then((db) => {
                    db
                        .collection('feeds')
                        .deleteOne({ _id: itemObjectId })
                        .then((result) => {
                            resolve(result.deletedCount);
                        })
                        .catch((err) => reject(console.log('Error' + err)));
                });
        } else {
            connect
                .then((db) => {
                    db
                        .collection('feeds')
                        .updateOne({ _id: itemObjectId },
                            { $pull: { feeds: { id: subItemId } } },
                        )
                        .then((result) => {
                            resolve(result.nModified);
                        })
                        .catch((err) => reject(console.log('Error' + err)));
                });
        }
    });
};

module.exports = {
    findCategoryByName,
    getAllCategories,
    addNewCategory,
    addNewFeed,
    deleteItem,
};
