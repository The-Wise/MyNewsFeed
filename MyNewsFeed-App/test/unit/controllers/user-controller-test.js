const mocha = require('mocha'),
      sinon = require('sinon'),
      chai = require('chai'),
      UserController = require('../../../controllers/user-controller.js'),
      FeedData = require('../../../data/feed-data.js'),
      UserData = require('../../../data/user-data.js');
      
let expect = chai.expect,
    assert = chai.assert;

let userDataStub,
    feedDataStub,
    dataStub,
    res,
    req,
    resStub;

describe('User-controller tests', function() {
    before(function() {
        userDataStub = sinon.createStubInstance(UserData),//sinon.stub(UserData, 'constructor'),
        feedDataStub = sinon.createStubInstance(FeedData),//.stub(FeedData, 'constructor'),
        dataStub = {
            feeds: feedDataStub,
            users: feedDataStub
        },
        res = { render: () => {} },
        req = {
            isAuthenticated: () => {},
            user: {
                username: 'asd'
            }
        },
        resStub = sinon.stub(res, 'render').returns(0);
    });

    after(function() {
        resStub.restore();
    });

    it('Expect UserController class to exist', function () {
        expect(UserController).to.exist;
    });

    it('Expect expect to set correctly the properties feedData and userData', function() {
        let userController = new UserController(dataStub);

        assert.deepEqual(userController.userData, userDataStub);//(userController.feedData).to.be.equal(feedDataStub);
        assert.deepEqual(userController.feedData, feedDataStub);//(userController.feedData).to.be.equal(feedDataStub);
    });

    it('Expect to have all functions', function() {
        let userController = new UserController(dataStub);

        expect(userController.followFeed).to.be.a('function');
        expect(userController.getUserProfile).to.be.a('function');
        expect(userController.loadMyFeedsPage).to.be.a('function');
        expect(userController.saveArticle).to.be.a('function');
    });

     describe('getUserProfile()', function() {
        it('Expect getUserProfile function to call res.render()', function() {
            let userController = new UserController(dataStub);

            userController.getUserProfile(req, res);

            sinon.assert.calledOnce(resStub);        
        })
    });

    describe('saveArticle()', function() {
        it('Expect to call addArticleToUser function once', function() {
            let data = {
                    users: {
                        addArticleToUser: () => {}
                    },
                    feeds: ''
                }, 
                userDataStubForAddArticle = sinon.stub(data.users, 'addArticleToUser');

            let userController = new UserController(data);
            
            userController.saveArticle(req, res);
            
            sinon.assert.calledOnce(userDataStubForAddArticle);    
        });
    });

    describe('followFeed()', function() {

        it('Expect to call addFeedToUser function once', function() {
            let data = {
                    users: {
                        addFeedToUser: () => {}
                    },
                    feeds: ''
                },
                userDataStubForAddFeedToUser = sinon.stub(data.users, 'addFeedToUser');

            let userController = new UserController(data);
            
            userController.followFeed(req, res);
            
            sinon.assert.calledOnce(userDataStubForAddFeedToUser);
        });
    });

    describe('loadMyFeedsPage()', function() {

        it('Expect to call findUserByUsername function once', function() {
            let data = {
                    users: {
                        findUserByUsername: () => {}
                    },
                    feeds: ''
                },
                promise = new Promise((resolve, reject) => resolve({})),
                findUserByUsernameStub = sinon.stub(data.users, 'findUserByUsername');

            let userController = new UserController(data);

            findUserByUsernameStub.returns(promise);

            userController.loadMyFeedsPage(req, res);

            sinon.assert.calledOnce(findUserByUsernameStub);
        });
    });
});