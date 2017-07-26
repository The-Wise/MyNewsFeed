const { expect } = require('chai');
const sinon = require('sinon');

const UserData = require('../../../data/user-data');
    const db = {
        collection: () => {},
    };
    let users = [];

    const userData = null;
    
    beforeEach(() => {
        sinon.stub(db, 'collection')
            .callsFake();
    });

    afterEach(() => {
                sinon.stub.restore();
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
