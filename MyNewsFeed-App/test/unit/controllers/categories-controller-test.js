let mocha = require('mocha'),
    chai = require('chai'),
    sinon = require('sinon'),
    CategoriesController = require('../../../controllers/categories-controller.js'),
    FeedData = require('../../../data/feed-data.js');

let expect = chai.expect;

describe('Categories controller test', function() {
    let feedDataStub,
        dataStub, 
        categoriesController;

    beforeEach(function() {
        feedDataStub = sinon.createStubInstance(FeedData);
        dataStub = { feeds: feedDataStub };
        categoriesController = new CategoriesController(dataStub);
    });

    it('Expect AdminController class to exist', function() {
        expect(CategoriesController).to.exist;
    });

    it('Expect expect to set correctly the property userData', function() {
        chai.assert.deepEqual(categoriesController.feedData, feedDataStub);
    });

    it('Expect to have all functions', function() {
        expect(categoriesController.loadCategoryPage).to.be.a('function');
    });
});