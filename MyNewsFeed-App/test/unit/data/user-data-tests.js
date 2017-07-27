const { expect } = require('chai');
const sinon = require('sinon');

const UserData = require('../../../data/user-data');
    const db = {
        collection: () => {},
    };
    let users = [];

    let userData = null;

    // const save = () => {};

    const findOne = (prop, value) => {
        return Promise.resolve(users.find((user) => {
            return user.prop === value;
        }));
    };

    // beforeEach(() => {
    //     sinon.stub(db, 'collection')
    //         .callsFake(() => {
    //             findOne('username', 'name');
    //         });
        const user = class {};

    afterEach(() => {
                sinon.restore();
            });

describe('DataUser tests', () => {
    describe('createUser', () => {
    });

    describe('findUserByID', () => {

    });

    describe('findUserByName', () => {
        beforeEach(() => {
        const save = sinon.stub(db, 'save');
        userData = new UserData(db);
            });

        afterEach(() => {
                save.restore();
            });

        it('SAVE method called once', () => {
          userData.findUserByUsername('username')
            .then(
                expect(save).to.have.been.calledOnce);
        });
    });

    describe('addFeedToUser', () => {

    });

    describe('addFeedToUser', () => {

    });

    describe('addArticleToUser', () => {

    });
});
