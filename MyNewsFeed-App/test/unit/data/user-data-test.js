const chai = require('chai');
const sinon = require('sinon'),
      expect = chai.expect,
      UserData = require('../../../data/user-data'),
      DBConn = require('../../../data/database-connection');

// const UserData = require('../../../data/user-data');
//     const db = {
//         collection: () => {},
//     };
//     const users = [];

//     // let userData = null;
//     // const findOne = () => {};

//     const newUserData = {
//         db: {
//             collection: () => {
//                 return {
//                     findOne: (name) => {
//                     },
//                 };
//             },
//         },
//     };
//     let userData;

//     // db.findOne = findOne();

//     // let save = () => {};

//     // let findOne = (prop, value) => {
//     //     return Promise.resolve(users.find((user) => {
//     //         return user.prop === value;
//     //     }));
//     // };

//     // beforeEach(() => {
//     //     sinon.stub(db, 'collection')
//     //         .callsFake(() => {
//     //             findOne('username', 'name');
//     //         });
//     const user

describe('User data tests', function() {
    let ObjectIdStub,
        userData,
        dbStub = {};

    beforeEach(function() {
        ObjectIdStub = sinon.stub(DBConn, 'ObjectID');
        userData = new UserData(dbStub);
    });

    afterEach(function() {
        ObjectIdStub.restore();
    });

    it('Expect UserData class to exist', function() {
        expect(UserData).to.exist;
    });

    it('Expect expect to set correctly the property db', function() {
        chai.assert.deepEqual(userData.db, dbStub);
    });

    it('Expect to have all functions', function() {
        expect(userData.createUser).to.be.a('function');
        expect(userData.findUserById).to.be.a('function');
        expect(userData.findUserByUsername).to.be.a('function');
        expect(userData.addFeedToUser).to.be.a('function');
        expect(userData.addArticleToUser).to.be.a('function');
    });
});
