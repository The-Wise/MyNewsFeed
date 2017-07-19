const FeedParser = require('feedparser');
const request = require('request');

const loadFeedPage = (req, res) => {
  const url = decodeURIComponent(req.params.feedurl);
  const baseurl = req.originalUrl;
  getFeed(url)
    .then((feed) => {
      res.render('feed/feed-page.pug', { feed, baseurl });
    });
};

const loadArticlePage = (req, res) => {
  const url = decodeURIComponent(req.params.articleurl);
  getFeed(url)
    .then((article) => {
      console.log(article);
      res.render('feed/article-page.pug', { article });
    });
};

const getFeed = (url) => {
  return new Promise((resolve, reject) => {
    const feed = [];
    const req = request(url);
    const feedparser = new FeedParser();

    req.on('error', (error) => {
          // handle any request errors
      console.log(error);
    });

    req.on('response', function(res) {
      const stream = this; // `this` is `req`, which is a stream

      if (res.statusCode !== 200) {
        stream.emit('error', new Error('Bad status code'));
      } else {
        stream.pipe(feedparser);
      }
    });

    feedparser.on('error', (error) => {
      reject(error);
    });

    feedparser.on('readable', function() {
      const stream = this;
      // const meta = this.meta;
      let item;

      while (item = stream.read()) {
        feed.push(item);
      }
    });
    feedparser.on('end', () => {
      // console.log(feed);
      if (feed.length === 1) {
        resolve(feed[0]);
        console.log(feed);
      } else {
        resolve(feed);
        console.log(feed);
      }
    });
  });
};

module.exports = {
  loadFeedPage,
  loadArticlePage,
};

// getFeed('http://design-milk.com/illusion-alphabet-bookmarks-by-phaidesign/feed/');
