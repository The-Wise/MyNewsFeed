const app = require('../../main');
const { expect } = require('chai');
const supertest = require('supertest');
const server = supertest.agent('http://localhost:3006');

describe('Integration tests', () => {
    describe('Home route', () => {
            it('Should return status 200', (done) => {
                server
                    .get('/')
                    .end((err, res) => {
                        // console.log(res);
                        expect(res.statusCode).to.equal(200);
                        done();
                });
        });

    describe('Nonexisting route', () => {
            it('Should return status 404', () => {
                server
                    .get('/random')
                    .expect(404);
                });
        });

    describe('Feed routes', () => {
            it('Category page should return status 200', (done) => {
                server
                    .get('/category/sport')
                    .expect(200)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200);
                        done();
                });
            });
        });
    });
});
