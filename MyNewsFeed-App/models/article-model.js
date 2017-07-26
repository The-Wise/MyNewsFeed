const { idGen } = require('../utils/id-generator');

class Article {
    constructor(title, date, articleUrl, feedUrl, imageUrl, summary, content) {
        this.id = idGen();
        this.title = title;
        this.date = date;
        this.articleUrl = articleUrl;
        this.feedUrl = feedUrl;
        this.imageUrl = imageUrl;
        this.summary = summary;
        this.content = content;
    }
    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title.toLowerCase();
    }

    get date() {
        return this._title;
    }

    set date(date) {
        this._date = date;
    }

    get feedUrl() {
        return this._feedUrl;
    }

    set feedUrl(feedUrl) {
        this._feedUrl = feedUrl;
    }

    get articleUrl() {
        return this._articleUrl;
    }

    set articleUrl(articleUrl) {
        this._articleUrl = articleUrl;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }

    get summary() {
        return this._summary;
    }

    set summary(summary) {
        this._summary = summary;
    }

    toObject() {
        console.log(this.feedUrl + ' Model');
        return {
            id: this.id,
            title: this.title,
            date: this.date,
            articleUrl: this.articleUrl,
            feedUrl: this.feedUrl,
            imageUrl: this.imageUrl,
            summary: this.summary,
            content: this.content,
        };
    }
}

module.exports = Article;
