const chai = require('chai');
const sinon = require('sinon'),
      expect = chai.expect,
      FeedData = require('../../../data/feed-data'),
      DBConn = require('../../../data/database-connection');

describe('Feed data tests', function() {
    let ObjectIdStub,
        feedData,
        dbStub = {};

    beforeEach(function() {
        ObjectIdStub = sinon.stub(DBConn, 'ObjectID');
        feedData = new FeedData(dbStub);
    });

    afterEach(function() {
        ObjectIdStub.restore();
    });

    it('Expect FeedData class to exist', function() {
        expect(FeedData).to.exist;
    });

    it('Expect expect to set correctly the property db', function() {
        chai.assert.deepEqual(feedData.db, dbStub);
    });

    it('Expect to have all functions', function() {
        expect(feedData.addNewCategory).to.be.a('function');
        expect(feedData.findCategoryByName).to.be.a('function');
        expect(feedData.getAllCategories).to.be.a('function');
        expect(feedData.addNewFeed).to.be.a('function');
        expect(feedData.findFeedByName).to.be.a('function');
        expect(feedData.addNewArticles).to.be.a('function');
        expect(feedData.findArticleById).to.be.a('function');
        expect(feedData.getLatestArticles).to.be.a('function');
        expect(feedData.deleteItem).to.be.a('function');
    });
});
