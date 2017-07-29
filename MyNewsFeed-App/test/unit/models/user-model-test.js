const expect = require('chai').expect;
const User = require('../../../models/user-model').User;

//fullname can be null
//urlProfilePicture can be null

describe('articleModel', function () {

    let  fullName = 'fullName',
         username = 'username',
         email = 'email',
         password = 'password',
         urlProfilePicture = 'urlProfilePicture',
         userJoined = '01.01.1000',
         admin = false;

    let user = new User(
            fullName, username, email,password, urlProfilePicture, userJoined, admin); 

    it('Expect User to exist', function () {
        expect(User).to.exist;

    });   
    it('Expect User to be a function', function () {
        expect(User).to.be.a('function');

    });
    it('Expect User constructor to set all params', function () { 
       expect(user).to.be.a('object');

    });
    it('Expect User get fullName to return valid fullName', function () {
       expect(user.fullName).to.equal(fullName);
       
    }); 
    it('Expect User get username to return valid username', function () {
       expect(user.username).to.equal(username);
       
    });
    it('Expect User get email to return valid email', function () {
       expect(user.email).to.equal(email);
       
    });
    it('Expect User get password to return valid password', function () {
       expect(user.password).to.equal(password);
       
    });
    it('Expect User get urlProfilePicture to return valid urlProfilePicture', function () {
       expect(user.urlProfilePicture).to.equal(urlProfilePicture);
       
    });
    it('Expect User get userJoined to return valid userJoined', function () {
       expect(user.userJoined).to.equal(userJoined);
       
    });
    it('Expect User get admin to return valid admin param', function () {
       expect(user.admin).to.equal(admin);
       
    });
    it('Should create User when passing valid params', function () {  
         function createUser() {
             let createUser = new User(
                 fullName, username, email,password, urlProfilePicture, userJoined, admin);  
        };

        expect(createUser).to.not.throw();
        
    });
    //
    it('Should throw when all params excepting fullname and urlProfilePicture and are null', function () {
        function setNullParams() {
            user.username = null;
            user.email = null;
            user.password = null;
            user.userJoined = null;
            user.admin = null;
        }

        expect(setNullParams).to.throw();

    });
    it('Should throw when username is null', function () {
        function setNullUsername() {
            user.username = null;
        }

        expect(setNullUsername).to.throw();

    });
    it('Should throw when email is null', function () {
        function setNullEmail() {
            user.email = null;
        }

        expect(setNullEmail).to.throw();

    });
    it('Should throw when password is null', function () {
        function setNullPassword() {
            user.password = null;
        }

        expect(setNullPassword).to.throw();

    });
    it('Should throw when userJoined is null', function () {
        function setNullUserJoined() {
            user.userJoined = null;
        }
     
        expect(setNullUserJoined).to.throw();

    });
    it('Should throw when admin is null', function () {
        function setNullAdmin() {
            user.admin = null;
        }

        expect(setNullAdmin).to.throw();

    });
    it('Should not throw when fullname is null', function () {
        function setNullFullnamet() {
            user.fullName = null;
        }

        expect(setNullFullnamet).to.not.throw();

    });
    it('Should not throw when urlProfilePicture is null', function () {
        function setNullUrlProfilePicture() {
            user.urlProfilePicture = null;
        }

        expect(setNullUrlProfilePicture).to.not.throw();

    });
    it('Should throw when all params excepting fullname and urlProfilePicture are empty strings', function () {
        function setEmptyParams() {
             user.username = '';
             user.email = '';
             user.password = '';
             user.userJoined = '';
             user.admin = '';
        }

        expect(setEmptyParams).to.throw();

    });
    it('Should throw when username is empty string', function () {
        function setEmptyUsername() {
            user.username = '';
        }

        expect(setEmptyUsername).to.throw();

    });
    it('Should throw when email is empty string', function () {
        function setEmptyEmail() {
            user.email = '';
        }

        expect(setEmptyEmail).to.throw();

    });
    it('Should throw when password is empty string', function () {
        function setEmptyPassword() {
            user.password = '';
        }

        expect(setEmptyPassword).to.throw();

    });
    it('Should throw when userJoined is empty string', function () {
        function setEmptyUserJoined() {
            user.userJoined = '';
        }

        expect(setEmptyUserJoined).to.throw();

    });
    it('Should throw when admin is not Bool', function () {
        function setEmptyAdmin() {
            user.admin = '';
        }

        expect(setEmptyAdmin).to.throw();

    });
    it('Should throw when admin is undefined', function () {
        function setUndefinedAdmin() {
            user.admin = undefined;
        }

        expect(setUndefinedAdmin).to.throw();

    });
    it('Should not throw when urlProfilePicture is empty string', function () {
        function setEmptyUrlProfilePicture() {
            user.urlProfilePicture = '';
        }

        expect(setEmptyUrlProfilePicture).to.not.throw();

    });
    it('Should not throw when fullName is empty string', function () {
        function setEmptyFullName() {
            user.fullName = '';
        }

        expect(setEmptyFullName).to.not.throw();

    });
    it('Expect user.toObject to return object', function () {
        user.toObject();

        expect(user).to.be.an('object');

    });   
    it('Expect user.toObject to return all keys', function () {
        user.toObject();

        expect(user).to.contain.keys(['_fullName', '_username', '_email' ,'_password' ,'_urlProfilePicture', '_userJoined','_userFeeds', '_userArticles','_admin']);

    });
    it('Expect userFeeds to exist when creating new user', function () {
        expect(user.userFeeds).to.not.be.undefined;

    });
    it('Expect user.userFeeds to exist', function () {
        expect(user.userFeeds).to.exist;

    });
    it('Expect userArticles to exist when creating new user', function () {
        expect(user.userArticles).to.not.be.undefined;

    });
    it('Expect user.userArticles to return user articles', function () {
        expect(user.userArticles).to.exist;

    });
    it('Should throw when userArticles is null', function () {
        function checkNullUserArticles() {
            user.userArticles = null;
        }

        expect(checkNullUserArticles).to.throw();

    });
    it('Should throw when userFeeds is null', function () {
        function checkNullUserFeeds() {
            user.userFeeds = null;
        }

        expect(checkNullUserFeeds).to.throw();

    });
});
