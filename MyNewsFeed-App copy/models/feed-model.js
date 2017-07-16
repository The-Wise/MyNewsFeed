class Feed {
    cosntructor(name, feedUrl, imageUrl, description) {
        this._name = name;
        this._feedUrl = feedUrl;
        this._imageUrl = imageUrl;
        this._description = description;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
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
            name: this._name,
            feedUrl: this._feedUrl,
            imageUrl: this._imageUrl,
            description: this._description,
        };
    }
}

module.exports = {
    Feed,
};
