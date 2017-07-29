const { idGen } = require('../utils/id-generator');

class Feed {
    constructor(title, feedUrl, imageUrl, description) {
        this.id = idGen();
        this.title = title;
        this.feedUrl = feedUrl;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        if(title === null) {
           throw "Title can not be null!"; 
        }
        if(title === '') {
           throw "Title can not be empty!"; 
        }
        this._title = title.toLowerCase();
    }
    get feedUrl() {
        return this._feedUrl;
    }
    set feedUrl(feedUrl) {
        if(feedUrl === null) {
           throw "feedUrl can not be null!"; 
        }
        if(feedUrl === '') {
           throw "feedUrl can not be empty!"; 
        }
        this._feedUrl = escape(feedUrl);
    }
    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        if(description === null) {
           throw "description can not be null!"; 
        }
        if(description === '') {
           throw "description can not be empty!"; 
        }
        this._description = description;
    }
    toObject() {
        return {
            id: this.id,
            title: this.title,
            feedUrl: this.feedUrl,
            imageUrl: this.imageUrl,
            description: this.description,
        };
    }
}

module.exports = {
    Feed
};
