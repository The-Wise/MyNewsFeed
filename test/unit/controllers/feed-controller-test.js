let mocha = require('mocha'),
    chai = require('chai'),
    sinon = require('sinon'),
    FeedController = require('../../../controllers/feed-controller.js'),
    FeedData = require('../../../data/feed-data.js');

let expect = chai.expect;

describe('Feed controller test', function() {
    let feedController,
        feedDataStub,
        dataStub,
        promise,
        req,
        res;

    beforeEach(function() {
        feedDataStub = sinon.createStubInstance(FeedController);
        promise = new Promise((resolve, reject) => {
 resolve({});
});
        dataStub = { feeds: feedDataStub };
        req = {
            originalUrl: '',
            params: {
                feedname: '',
                feedurl: '',
            },
            isAuthenticated: () => {},
        };
        res = {
            render: () => {},
        };

        feedController = new FeedController(dataStub);
    });

    it('Expect FeedController class to exist', function() {
        expect(FeedController).to.exist;
    });

    it('Expect expect to set correctly the property feedData', function() {
        chai.assert.deepEqual(feedController.feedData, feedDataStub);
    });

     it('Expect to have all functions', function() {
        expect(feedController.loadFeedPage).to.be.a('function');
        expect(feedController.loadArticlePage).to.be.a('function');
        expect(feedController.refreshFeed).to.be.a('function');
        expect(feedController.getFeed).to.be.a('function');
    });

    describe('loadFeedPage()', function() {
        it('Expect to call this.feedData.findFeedByName() function once', function() {
            feedDataStub = {
                findFeedByName: () => {},
            };

            dataStub = { feeds: feedDataStub };

            let findFeedByNameStub = sinon.stub(feedDataStub, 'findFeedByName');

            feedController = new FeedController(dataStub);

            findFeedByNameStub.returns(promise);

            feedController.loadFeedPage(req, res);

            sinon.assert.calledOnce(findFeedByNameStub);
        });
    });

    describe('loadArticlePage()', function() {
        it('Expect to call this.feedData.findArticleById() function once', function() {
            feedDataStub = {
                findArticleById: () => {},
            };

            dataStub = { feeds: feedDataStub };

            let findArticleByIdStub = sinon.stub(feedDataStub, 'findArticleById');

            feedController = new FeedController(dataStub);

            findArticleByIdStub.returns(promise);

            feedController.loadArticlePage(req, res);

            sinon.assert.calledOnce(findArticleByIdStub);
        });
    });

    // describe('refreshFeed()', function() {
    //     it('Expect to call this.getFeed() function once', function() {
    //         feedDataStub = {
    //             findArticleById: () => {}
    //         };

    //         dataStub = { feeds: feedDataStub }

    //         let findArticleByIdStub = sinon.stub(feedDataStub, 'addNewArticles');

    //         feedController = new FeedController(dataStub);

    //         let getFeedStub = sinon.stub(feedController, 'getFeed');

    //         findArticleByIdStub.returns(promise);
    //         getFeedStub.returns(promise);

    //         feedController.loadArticlePage(req, res);

    //         sinon.assert.calledOnce(getFeedStub);
    //     });
    // });
});
