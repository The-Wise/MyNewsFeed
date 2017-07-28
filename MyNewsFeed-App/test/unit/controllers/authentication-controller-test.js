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
            flash: () => {},
            logout: () => {},
            body: {
                username: '',
                email: '',
                password: '',
                urlProfilePicture: '',
                name: ''
            }
        },
        res = {
            render: () => {},
            redirect: () => {}
        },
        validator =  {
            validateRegisterForm: () => {}
        },
        authenticationController = new AuthenticationController(dataStub, null);
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

    describe('login()', function() {
        it('Expect to call res.redirect() function once', function() {
            let resStub = sinon.stub(res, 'redirect');

            authenticationController.login(req, res);

            sinon.assert.calledOnce(resStub);
        });
    });

    describe('logout()', function() {
        it('Expect to call req.logout() function once', function() {
            let reqStub = sinon.stub(req, 'logout');

            authenticationController.logout(req, res);

            sinon.assert.calledOnce(reqStub);
        });

        it('Expect to call req.flash() function once', function() {
            let reqStub = sinon.stub(req, 'flash');

            authenticationController.logout(req, res);

            sinon.assert.calledOnce(reqStub);
        });

        it('Expect to call res.redirect() function once', function() {
            let resStub = sinon.stub(res, 'redirect');

            authenticationController.logout(req, res);

            sinon.assert.calledOnce(resStub);
        });
    });

    describe('singup()', function() {
        let userData,
            data,
            promise,
            validatorStub;

        beforeEach(function() {
            userData = { createUser: () => {} },
            data = { users: userData };

            validatorStub = sinon.stub(validator, 'validateRegisterForm'),
            promise = new Promise((resolve, reject) => { resolve({}) });
            userDataStub = sinon.stub(data.users, 'createUser');
        });

        afterEach(function() {
            validatorStub.restore();
            userDataStub.restore();
        });

        it('Should call this.valdator.validateRegisterForm() function once', function() {
                validatorStub.returns(false);
                userDataStub.returns(promise);

                authenticationController = new AuthenticationController(data, validator);

                authenticationController.signup(req, res);

                sinon.assert.calledOnce(validatorStub);
        });

        it('Should call this.userData.createUser() function once', function() {
                validatorStub.returns(false);
                userDataStub.returns(promise);

                authenticationController = new AuthenticationController(data, validator);

                authenticationController.signup(req, res);

                sinon.assert.calledOnce(userDataStub);
        });
            
        it('Should call res.render() function once', function() {
            let resStub = sinon.stub(res, 'render');

                validatorStub.returns(true);

                authenticationController = new AuthenticationController(data, validator);

                authenticationController.signup(req, res);

                sinon.assert.calledOnce(resStub);
        });
    });
});