class Feed {
    constructor(title, feedUrl, imageUrl, description
    ) {
        this._title = title;
        this._feedUrl = feedUrl;
        this._imageUrl = imageUrl;
        this._description = description;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title.toLowerCase();
    }
    get feedUrl() {
        return this._feedUrl;
    }
    set feedUrl(feedUrl) {
        this._feedUrl = feedUrl;
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
        this._description = description;
    }
    toObject() {
        return {
            title: this._title,
            feedUrl: this._feedUrl,
            imageUrl: this._imageUrl,
            description: this._description,
        };
    }
}

module.exports = {
    Feed,
};
