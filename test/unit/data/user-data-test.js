const { expect } = require('chai');
const sinon = require('sinon');
const UserData = require('../../../data/user-data');
const DBConn = require('../../../data/database-connection');


describe('User data tests', function() {
    let ObjectIdStub,
        userData,
        db = {
            collection: () => { },
        },
        userId, username;

    beforeEach(function() {
        ObjectIdStub = sinon.stub(DBConn, 'ObjectID');
        userData = new UserData(db);
    });

    afterEach(function() {
        ObjectIdStub.restore();
    });

    it('Expect UserData class to exist', function() {
        expect(UserData).to.exist;
    });

    it('Expect to set correctly the property db', function() {
        expect(userData.db).to.deep.equal(db);
    });

    it('Expect to have all functions', function() {
        expect(userData.createUser).to.be.a('function');
        expect(userData.findUserById).to.be.a('function');
        expect(userData.findUserByUsername).to.be.a('function');
        expect(userData.addFeedToUser).to.be.a('function');
        expect(userData.addArticleToUser).to.be.a('function');
    });

    it('Expect findUserByName to be called once', () => {
        const findUserByUsername = sinon.stub(userData, 'findUserByUsername');
        userData.findUserByUsername();
        sinon.assert.calledOnce(findUserByUsername);
        findUserByUsername.restore();
    });
    it('Expect findUserByUsername to return a user', () => {
        const users = [{ id: '12345', username: 'Test User1' }, { id: '23456', username: 'Test User2' }];
        username = users[0].username;
        sinon.stub(db, 'collection').callsFake(() => {
            return { findOne };
        });
        const findOne = () => {
            const user = users.find((u) => {
                return u.username === username;
              });
            return Promise.resolve(user);
        };
        return userData.findUserByUsername(username)
            .then((user) => {
                expect(user).to.deep.equal(users[0]);
            });
    });
});
