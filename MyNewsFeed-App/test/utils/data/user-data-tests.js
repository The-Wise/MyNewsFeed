const { expect } = require('chai');
const sinon = require('sinon');

const UserData = require('../../../data/user-data');
    const db = {
        collection: () => {},
    };
    let users = [];

    const userData = null;

    const findOne = (name) => {
        return Promise.resolve(users[name]);
    };
    
    beforeEach(() => {
        sinon.stub(db, 'collection')
            .callsFake(() => {
                findOne(name);
            });
    });

    afterEach(() => {
                sinon.restore();
            });

describe('DataUser tests', () => {
    describe('createUser', () => {
    
    });

    describe('findUserByID', () => {

    });

    describe('findUserByName', () => {

    });

    describe('addFeedToUser', () => {

    });

    describe('addFeedToUser', () => {

    });

    describe('addArticleToUser', () => {

    });
    
});
