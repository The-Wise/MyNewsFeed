class Category {
    constructor(name) {
        this.name = name;
        this.feeds = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (name === null)
        {
            throw new Error('Name can not be null!');
        }
        if (name === '')
        {
            throw new Error('Name can not be empty!');
        }
        console.log(name);
        this._name = name.toLowerCase();
        console.log(this._name);
    }

    toObject() {
        return {
            name: this.name,
            feeds: this.feeds,
    };
    }
}

module.exports = {
    Category,
};
