let mocha = require('mocha'),
    chai = require('chai'),
    sinon = require('sinon'),
    HomeController = require('../../../controllers/home-controller.js'),
    FeedData = require('../../../data/feed-data.js');

let expect = chai.expect,
    feedDataStub,
    dataStub;

describe('Home-controller test', function() {
    before(function() {
        feedDataStub = sinon.createStubInstance(FeedData),
        dataStub = { feeds: feedDataStub };
    });

    it('Expect HomeController class to exist', function() {
        expect(HomeController).to.exist;
    });

    it('Expect expect to set correctly the property feedData', function() {
        let homeController = new HomeController(dataStub);

        chai.assert.deepEqual(homeController.feedData, feedDataStub);//(userController.feedData).to.be.equal(feedDataStub);
    });

    it('Expect to have all functions', function() {
        let homeController = new HomeController(dataStub);

        expect(homeController.loadHomePage).to.be.a('function');
    });

    describe('loadHomePage()', function() {
        it('Should call getLatestArticles function once', function() {
            let data = {
                    users: '',
                    feeds: {
                        getLatestArticles: () => {}
                    }
                },
                res = { render: () => {} },
                req = {
                    isAuthenticated: () => {},
                    flash: () => {},
                    user: {
                        username: 'asd'
                    }
                },
                promise = new Promise((resolve, reject) => resolve({})),
                getLatestArticlesStub = sinon.stub(data.feeds, 'getLatestArticles');

            let homeController = new HomeController(data);

            getLatestArticlesStub.returns(promise);

            homeController.loadHomePage(req, res);

            sinon.assert.calledOnce(getLatestArticlesStub);
        });
    });
});
