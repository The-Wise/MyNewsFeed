class Category {
    constructor(name) {
        this.name = name;
        this.feeds = [];
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
            name: this.name,
            feeds: this.feeds,
    };
    }
}

module.exports = {
    Category
};
 