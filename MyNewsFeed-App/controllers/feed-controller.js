const FeedParser = require('feed-parser');
const request = require('request'); // for fetching the feed

const feed = [];

const loadFeed = (res, req) => {
  req.render('feed/feed-page.pug', feed);
};

const getFeed = (url) => {
  const req = request(url);
  const feedparser = new FeedParser();

  req.on('error', (error) => {
        // handle any request errors
    console.log(error);
  });

  req.on('response', function(res) {
    const stream = this; // `this` is `req`, which is a stream

    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    } else {
      stream.pipe(feedparser);
    }
  });

  feedparser.on('error', (error) => {
        // always handle errors
    console.log(error);
  });

  feedparser.on('readable', function () {
        // This is where the action is!
    const stream = this; // `this` is `feedparser`, which is a stream
    const meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
    let item;

    while (item = stream.read()) {
      feed.push(item);
      console.log(item);
    }
   // loadFeed();
  });
};

module.exports = {
  getFeed,
};
