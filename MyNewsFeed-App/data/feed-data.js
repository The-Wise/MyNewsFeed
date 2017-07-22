const dbc = require('./database-connection');
const connect = dbc.connect();
const { Category } = require('../models/category-model');
const { Feed } = require('../models/feed-model');
const { Article } = require('../models/article-model');
const ObjectId = dbc.ObjectId;

const findCategoryByName = (name) => {
    return new Promise((resolve, reject) => {
        connect
        .then((db) => {
            db
            .collection('categories')
            .findOne({ name })
            .then((category) => resolve(category))
            .catch((err) => console.log(err));
            });
        });
    };

const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        connect
        .then((db) => {
            db
            .collection('categories')
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
            .collection('categories')
            .insertOne(category, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    });
};

const addNewFeed = (catName, catId, title, url, image, description) => {
    return new Promise((resolve, reject) => {
        const feed = new Feed(title, url, image, description).toObject();
        catId = catId.toString();
        connect
        .then((db) => {
            return Promise.all([
                db
                .collection('categories')
                .updateOne({ name: catName }, { $push: { feeds: feed } }),
                db
                .collection('feeds')
                .insertOne({ catId, catName, feedId: feed.id,
                    name: feed.title, articles: [] }),
            ])
            .then((result) => resolve(result))
            .catch((err) => reject('Error ' + err));
        });
    });
};

const addNewArticles = (feedname, feeds) => {
    return new Promise((resolve, reject) => {
        const articles = feeds.map((feed) => {
        return new Article(feed.title, feed.date, feed.link,
            feed.image.url, feed.summary, feed['content:encoded']['#']).toObject();
        });
        connect
        .then((db) => {
            db
            .collection('feeds')
            .updateOne({ name: feedname }, { $set: { articles: [] } })
            .then(
                db
                .collection('feeds')
                .updateOne({ name: feedname },
                    { $pushAll: { articles: articles } } )
            )
            .catch((err) => console.log(err));
        });
        resolve(articles);
    });
};

const findArticleById = (feedname, id) => {
    return new Promise((resolve, reject) => {
        connect
        .then((db) => {
            db
            .collection('feeds')
            .findOne({ name: feedname }, { articles: { $elemMatch: { id } } } )
            .then((article) => resolve(article.articles[0]))
            .catch((err) => reject(console.log(err)));
        });
    });
};

const deleteItem = (itemId, subItemId) => {
    return new Promise((resolve, reject) => {
        const itemObjectId = new ObjectId(itemId);
        if (!subItemId) {
            connect
                .then((db) => {
                    return Promise.all([
                        db
                        .collection('categories')
                        .deleteOne({ _id: itemObjectId }),
                        db
                        .collection('feeds')
                        .deleteMany({ catId: itemId }),
                    ])
                        .then((result) => {
                            resolve(result[0].deletedCount +
                                result[1].deletedCount);
                        })
                        .catch((err) => reject(console.log('Error' + err)));
                });
        } else {
            connect
                .then((db) => {
                    return Promise.all([
                        db
                        .collection('categories')
                        .updateOne({ _id: itemObjectId },
                            { $pull: { feeds: { id: subItemId } } }),
                        db
                        .collection('feeds')
                        .deleteOne({ feedId: subItemId }),
                    ])
                        .then((result) => {
                            resolve(result[0].result.nModified +
                                result[1].deletedCount);
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
    addNewArticles,
    findArticleById,
    deleteItem,
};
