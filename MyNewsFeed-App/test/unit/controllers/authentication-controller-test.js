let mocha = require('mocha'),
    chai = require('chai'),
    sinon = require('sinon'),
    AuthenticationController = require('../../../controllers/authentication-controller.js'),
    UserData = require('../../../data/user-data.js');

let expect = chai.expect;

describe('Authentication controller test', function() {
    let userDataStub,
        dataStub,
        req,
        res,
        authenticationController;

    beforeEach(function() {
        userDataStub = sinon.createStubInstance(UserData),
        dataStub = { users: userDataStub },
        req = { 
            flash: () => {}
        },
        res = {
            render: () => {}
        },
        authenticationController = new AuthenticationController(dataStub);
    });

    it('Expect HomeController class to exist', function() {
        expect(AuthenticationController).to.exist;
    });

    it('Expect expect to set correctly the property userData', function() {
        chai.assert.deepEqual(authenticationController.userData, userDataStub);
    });

    it('Expect to have all functions', function() {
        expect(authenticationController.loadLoginPage).to.be.a('function');
        expect(authenticationController.loadSignupPage).to.be.a('function');
        expect(authenticationController.login).to.be.a('function');
        expect(authenticationController.logout).to.be.a('function');
        expect(authenticationController.signup).to.be.a('function');
    });

    describe('loadLoginPage()', function() {
        it('Expect to call res.render() function once', function() {
            let resStub = sinon.stub(res, 'render');

            authenticationController.loadLoginPage(req, res);

            sinon.assert.calledOnce(resStub);
        });

        it('Expect to call req.flash() function once', function() {
            let reqStub = sinon.stub(req, 'flash');

            authenticationController.loadLoginPage(req, res);

            sinon.assert.calledOnce(reqStub);
        });
    });

    describe('loadSignupPage()', function() {
        it('Expect to call res.render() function once', function() {
            let resStub = sinon.stub(res, 'render');

            authenticationController.loadSignupPage(req, res);

            sinon.assert.calledOnce(resStub);
        });
    });

});