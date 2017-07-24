
const feedData = require('./fee-data');
const userData = require('./user-data');

const init = (db) => {
    return Promise.resolve({
        feeds: feedData(db),
        users: userData(db),
    });
};

module.exports = { init };
