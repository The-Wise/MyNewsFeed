let mocha = require('mocha'),
    chai = require('chai'),
    sinon = require('sinon'),
    AdminController = require('../../../controllers/admin-controller.js'),
    FeedData = require('../../../data/feed-data.js');

const expect = chai.expect;

describe('Admin controller test', function() {
    let adminController,
        dataStub,
        feedDataStub,
        req = {
            flash: () => {},
            logout: () => {},
            body: {
                username: '',
                email: '',
                password: '',
                urlProfilePicture: '',
                name: '',
                category: '',
            },
            isAuthenticated: () => {},
        },
        res = {
            render: () => {},
            redirect: () => {},
        };

    beforeEach(function() {
        feedDataStub = sinon.createStubInstance(AdminController);
        dataStub = { feeds: feedDataStub };
        adminController = new AdminController(dataStub);
    });

    it('Expect AdminController class to exist', function() {
        expect(AdminController).to.exist;
    });

    it('Expect expect to set correctly the property userData', function() {
        chai.assert.deepEqual(adminController.feedData, feedDataStub);
    });

    it('Expect to have all functions', function() {
        expect(adminController.addNewCategory).to.be.a('function');
        expect(adminController.addNewFeed).to.be.a('function');
        expect(adminController.deleteCategoryFeed).to.be.a('function');
        expect(adminController.loadAddForm).to.be.a('function');
    });

    describe('loadAddForm()', function() {
        beforeEach(function() {
            feedDataStub = {
                getAllCategories: () => {},
            };
            dataStub = {
                feeds: feedDataStub,
            };
        });

        it('Expect to call this.feedData.getAllCategories() function once', function() {
            let getAllCategoriesStub = sinon.stub(feedDataStub, 'getAllCategories'),
                promise = new Promise((resolve, reject) => { resolve({}) });

            adminController = new AdminController(dataStub);

            getAllCategoriesStub.returns(promise);

            adminController.loadAddForm(req, res);

            sinon.assert.calledOnce(getAllCategoriesStub);
        });
    });

    describe('addNewCategory()', function() {
        beforeEach(function() {
            feedDataStub = {
                findCategoryByName: () => {},
            };
            dataStub = {
                feeds: feedDataStub,
            };
        });

        it('Expect to call req.flash() function once', function() {
            let findCategoryByNameStub = sinon.stub(feedDataStub, 'findCategoryByName'),
                reqStub = sinon.stub(req, 'flash'),
                promise = new Promise((resolve, reject) => {
 resolve({}); 
});

            adminController = new AdminController(dataStub);

            findCategoryByNameStub.returns(promise);

            adminController.addNewCategory(req, res);

            sinon.assert.calledOnce(reqStub);
        });

        it('Expect to call res.redirect() function once', function() {
            let findCategoryByNameStub = sinon.stub(feedDataStub, 'findCategoryByName'),
                resStub = sinon.stub(res, 'redirect'),
                promise = new Promise((resolve, reject) => { resolve({}); });

            adminController = new AdminController(dataStub);

            findCategoryByNameStub.returns(promise);

            adminController.addNewCategory(req, res);

            sinon.assert.calledOnce(resStub);
        });

        it('Expect to call this.feedData.findCategoryByName() function once', function() {
            let findCategoryByNameStub = sinon.stub(feedDataStub, 'findCategoryByName'),
                promise = new Promise((resolve, reject) => { resolve({}); });

            req.body.category = 'category';

            adminController = new AdminController(dataStub);

            findCategoryByNameStub.returns(promise);

            adminController.addNewCategory(req, res);

            sinon.assert.calledOnce(findCategoryByNameStub);
        });
    });
});
