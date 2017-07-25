class Category {
    constructor(name) {
        this._name = name;
        this._feeds = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name.toLowerCase();
    }

    toObject() {
        return {
            name: this._name,
            feeds: this._feeds,
        };
    }
}

module.exports = Category;
