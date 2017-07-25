const FeedData = require('./feed-data');
const UserData = require('./user-data');

const init = (db) => {
   return Promise.resolve({
        feeds: new FeedData(db),
        users: new UserData(db),
    });
};

module.exports = { init };
