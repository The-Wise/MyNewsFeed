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
            it('Feed page should return status 200', (done) => {
                server
                    .get('/category/news/BBC news/http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml')
                    .expect(200)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200);
                        done();
                });
            });
            it('Article page should return status 200', (done) => {
                server
                    .get('/category/news/BBC news/http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml/li5flourv')
                    .expect(200)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200);
                        done();
                });
            });
    describe('Authentication routes', () => {
            it('GET /signup should return status 200 ', (done) => {
                server
                    .get('/signup')
                    .expect(200)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200);
                        done();
                    });
            });
            it('GET /login should return status 200 ', (done) => {
                server
                    .get('/login')
                    .expect(200)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200);
                        done();
                     });
            });
            it('POST /signup should return status 200 when all required fields are filled', (done) => {
                let user = { username: 'username', fullname: 'Fullname', email: 'test@email.com', password: 'password' };
                server
                    .post('/signup')
                    .send(user)
                    .expect('Location', /\/login/, done);
            });
            it('POST /login should return status 302 when logging in with valid account', (done) => {
                let user = { email: 'test@email.com', password: 'password' };
                server
                    .post('/login')
                    .send(user)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(302);
                        done();
                    });
            });
            it('POST /login should return status 302  when logging in with invalid account', (done) => {
                let user = { email: 'invalid@email.com', password: 'password' };
                server
                    .post('/login')
                    .send(user)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(302);
                        done();
                    });
            });
            it('POST /login should return status 302  when logging in with blank email parameter', (done) => {
                let user = { email: '', password: 'password' };
                server
                    .post('/login')
                    .send(user)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(302);
                        done();
                    });
            });
            it('POST /login should return status 302  when logging in with blank password parameter', (done) => {
                let user = { email: 'test@email.com', password: '' };
                server
                    .post('/login')
                     .send(user)
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(302);
                        done();
                    });
            });
            it('POST /login should return status 302  when logging in with invalid password', (done) => {
                let user = { email: 'test@email.com', password: 'invalid.password' };
                server
                    .post('/login')
                     .send(user)
                     .end((err, res) => {
                        expect(res.statusCode).to.equal(302);
                        done();
                    });
            });
      });
    });
 });
});

