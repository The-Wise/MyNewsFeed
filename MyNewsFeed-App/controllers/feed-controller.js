const FeedParser = require('feedparser');
const request = require('request');

class FeedController {
  constructor(data) {
    this.feedData = data.feeds;
  }

  loadFeedPage(req, res) {
    const originalurl = req.originalUrl;
    const feedname = decodeURI(req.params.feedname);
    this.feedData.findFeedByName(feedname)
      .then(({ articles }) => {
        res.render('feed/feed-page.pug', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          isAdmin: () => {
          return req.user.admin;
        },
          articles,
          originalurl,
          feedname });
      });
  }

  loadArticlePage(req, res) {
    const id = req.params.articleid;
    const feedname = req.params.feedname;
      this.feedData.findArticleById(feedname, id)
      .then((article) => {
        // console.log(article);
        res.render('feed/article-page.pug', {
          article,
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          isAdmin: () => {
          return req.user.admin;
        },
        });
      });
  }

  refreshFeed(req, res) {
    const url = req.params.feedurl;
    const urlenc = encodeURIComponent(req.params.feedurl);
    const name = req.params.feedname;
    console.log(urlenc);
    this.getFeed(url)
    .then((feed) => {
      console.log(url + ' feed_controller');
      this.feedData.addNewArticles(name, urlenc, feed);
    })
    .then(() => {
      req.flash('success', 'Feed Refreshed');
      res.redirect(req.get('referer'));
    }
    );
  }

  getFeed(url) {
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
        let item;

        while (item = stream.read()) {
          feed.push(item);
        }
      });
      feedparser.on('end', () => {
          resolve(feed);
      });
    });
  }
}

module.exports = FeedController;
