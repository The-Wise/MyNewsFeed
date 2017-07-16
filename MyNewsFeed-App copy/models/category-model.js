class Category {
    constructor(title) {
        this._title = title;
        this._feeds = [];
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }

    toObject() {
        return {
            title: this._title,
            feeds: this._feeds,
        };
    }
}

module.exports = {
    Category,
};
