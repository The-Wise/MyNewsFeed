const expect = require('chai').expect;
let Category = require('../../../models/category-model').Category;

let categoryName = 'categoryName';
let category = new Category(categoryName);

describe('categoriesModel', function () {
    it('Expect Category to exist', function () {
        expect(Category).to.exist;

    });   
    it('Expect Category to be a function', function () {
        expect(Category).to.be.a('function');

    });
    it('Expect Category to set feeds', function () {
        let feeds = category.feeds;
        expect(feeds).to.exist;

    });
    it('Expect Category to set name', function () {
        let name = category.name;
        expect(name).to.exist;

    });
    it('Expect feeds to exist when creating new Category', function () {
        expect(category.feeds).to.not.be.undefined;

    });
    it('Should Category constructor to set all params', function () {
        expect(category).to.be.an('object');

    });
    it('Expect Category get name to return valid name.toLowerCase()', function () {
        expect(category.name).to.equal(categoryName.toLowerCase());
       
    });
    it('Should throw when passing null for name', function () {
        function setNullName() {
            category.name = '';
        }
 
        expect(setNullName).to.throw();

    });
    it('Should throw when passing empty string for name', function () {
        function setEmptyName() {
            category.name = null;
        }

        expect(setEmptyName).to.throw();

    });
    it('Expect category.toObject to return object', function () {
        category.toObject();

        expect(category).to.be.an('object');

    });
    it('Expect article.toObject to return all keys', function () {
        category.toObject();

        expect(category).to.contain.keys(['_name', 'feeds' ]);

    });
});