'use strict';
const { idGen } = require('../utils/id-generator');

class Article {
    constructor(title, date, articleUrl, feedUrl, imageUrl, summary, content) {
       // var id = null;
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
        if (title === null) {
           throw new Error('title can not be null');
        }
        if (title === '') {
           throw new Error('title can not be empty!');
        }

        this._title = title.toLowerCase();
    }
    get date() {
        return this._date;
    }
    set date(date) {
        if (date === null) {
           throw new Error('date can not be null');
        }
        if (date === '') {
           throw new Error('date can not be empty!');
        }

        this._date = date;
    }
    get feedUrl() {
        return this._feedUrl;
    }
    set feedUrl(feedUrl) {
        if (feedUrl === null) {
           throw new Error('feedUrl can not be null');
        }
        if (feedUrl === '') {
           throw new Error('feedUrl can not be empty!');
        }

        this._feedUrl = feedUrl;
    }
    get articleUrl() {
        return this._articleUrl;
    }
    set articleUrl(articleUrl) {
        if (articleUrl === null) {
           throw new Error('articleUrl can not be null');
        }
        if (articleUrl === '') {
           throw new Error('articleUrl can not be empty!');
        }

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
        if (summary === null) {
           throw new Error('summary can not be null');
        }
        if (summary === '') {
           throw new Error('summary can not be empty!');
        }

        this._summary = summary;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
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

module.exports = {
    Article,
};
