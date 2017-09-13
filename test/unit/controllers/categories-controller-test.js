let mocha = require('mocha'),
    chai = require('chai'),
    sinon = require('sinon'),
    CategoriesController = require('../../../controllers/categories-controller.js'),
    FeedData = require('../../../data/feed-data.js');

let expect = chai.expect;

let feedDataStub,
        dataStub,
        categoriesController;

describe('Categories controller test', function() {
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

    describe('loadCategoryPage()', function() {
        it('Expect to call this.feedData.findCategoryByName() function once', function() {
            let promise = new Promise((resolve, reject) => { resolve({}); }),
                req = {
                    params: {
                        category: '',
                    },
                    isAuthenticated: () => {},
                    user: {
                        admin: true,
                    },
                },
                res = {
                    render: () => {},
                };

            feedDataStub = {
                findCategoryByName: () => {},
            };

            let findCategoryByNameStub = sinon.stub(feedDataStub, 'findCategoryByName');
            dataStub = { feeds: feedDataStub };
            categoriesController = new CategoriesController(dataStub);

            findCategoryByNameStub.returns(promise);

            categoriesController.loadCategoryPage(req, res);

            sinon.assert.calledOnce(findCategoryByNameStub);
        });
    });
});
