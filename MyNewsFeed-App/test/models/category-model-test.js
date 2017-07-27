const expect = require('chai').expect;
let Category = require('../../models/category-model').Category;

let categoryName = 'categoryName';
let category = new Category(categoryName);

describe('categoriesModel', function () {
    it('Expect Category to exist', function () {
        expect(Category).to.exist;

    });   
    it('Expect Category to be a function', function () {
        expect(Category).to.be.a('function');

    });
    it('Should Category constructor to set a name', function () {
        expect(category).to.be.an('object');

    });
    it('Expect Category get name to return valid name', function () {
        expect(category.name).to.equal(categoryName);
       
    });
    it('Should throw when passing null for name', function () {
        function setEmptyName() {
            category.name = null;
        }

        expect(setEmptyName).to.throw();

    });
    it('Should throw when passing empty string for name', function () {
        function setNullName() {
            category.name = null;
        }
 
        expect(setNullName).to.throw();

    });
    it('Expect category.toObject to return object', function () {
        category.toObject();

        expect(category).to.be.an('object');

    });
});