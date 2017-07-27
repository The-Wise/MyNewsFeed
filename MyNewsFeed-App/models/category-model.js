class Category {
    constructor(name) {
        this._name = name;
        this._feeds = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if(name === null)
        {
            throw 'Name can not be null!';
        }
        if(name === '')
        {
            throw 'Name can not be empty!'
        }
        
        this._name = name.toLowerCase();
    }

    toObject() {
        return {
            name: this._name,
            feeds: this._feeds,
        };
    }
}

module.exports = {
    Category
};
 