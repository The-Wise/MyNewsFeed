const { idGen } = require('../utils/id-generator');

class Article {
    constructor(title, date, articleUrl, imageUrl, summary, content) {
        this._id = idGen();
        this._title = title;
        this._date = date;
        this._articleUrl = articleUrl;
        this._imageUrl = imageUrl;
        this._summary = summary;
        this._content = content;
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
    get articleUrl() {
        return this._articleUrl;
    }
    set articleUrl(articleUrl) {
        this._articleUrl = escape(articleUrl);
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
        return {
            id: this._id,
            title: this._title,
            date: this._date,
            articleUrl: this._articleUrl,
            imageUrl: this._imageUrl,
            summary: this._summary,
            content: this._content,
        };
    }
}

module.exports = {
    Article,
};
