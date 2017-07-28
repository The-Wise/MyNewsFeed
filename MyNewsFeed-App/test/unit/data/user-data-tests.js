// const { expect } = require('chai');
// const sinon = require('sinon');

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
//     const user = class {};
//     let findOne;

//     // afterEach(() => {
//     //             sinon.restore();
//     //         });

// describe('DataUser tests', () => {
//     describe('createUser', () => {
//     });

//     describe('findUserByID', () => {

//     });

//     describe('findUserByName', () => {
//         beforeEach(() => {
//         sinon.stub(db, 'collection');
//             // .callsFake(() => {
//             //     return findOne('username', 'name');
//             //     });
//         findOne = sinon.stub(newUserData.db.collection, 'findOne').resolves('Promise.resolve()');
//         userData = new UserData(newUserData.db);
//             });

//         afterEach(() => {
//                 db.collection.restore();
//                 db.findOne.restore();
//             });

//         it('findOne method called once', (done) => {
//           userData.findUserByUsername('username')
//             .then(
//                 // expect(findOne).to.have.been.calledOnce
//                 sinon.assert.calledOnce(findOne)
//             );
//             done();
//         });
//     });

//     describe('addFeedToUser', () => {

//     });

//     describe('addFeedToUser', () => {

//     });

//     describe('addArticleToUser', () => {

//     });
// });