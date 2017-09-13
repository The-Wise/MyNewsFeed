/* globals browser, $, $$ */
const { expect } = require('chai');

describe('Functional tests', () => {
    describe('Home page tests', () => {
        before(() => {
            browser.url('http://localhost:3006');
        });
        it('should have the correct logo name', () => {
                const logo = $('.brand-logo').getText();
                        expect(logo).to.be.equal('rss_feed\nMyNews');
        });
        it('should have the correct heading message', () => {
                const heading = $('h3').getText();
                        expect(heading).to.be.equal('Latest articles from our channels');
        });
    });

    describe('Main menu tests', () => {
        it('should have the correct menu items', () => {
                const menuItems = $$('#main-menu a').map((e) => { return e.getText(); });
                expect(menuItems[0]).to.equal('HOME');
                expect(menuItems[1]).to.equal('MY FEEDS');
                expect(menuItems[2]).to.equal('NEWS');
                expect(menuItems[3]).to.equal('SPORT');
                expect(menuItems[4]).to.equal('DESIGN');
                expect(menuItems[5]).to.equal('TECH');
                expect(menuItems[6]).to.equal('LOG IN');
                expect(menuItems[7]).to.equal('SIGN UP');
            });
        it('should have the correct hrefs', () => {
            const links = $$('#main-menu a').map((e) => { return e.getAttribute('href'); });
            expect(links[0]).to.equal('http://localhost:3006/');
            expect(links[1]).to.equal('http://localhost:3006/#');
            expect(links[2]).to.equal('http://localhost:3006/category/news/');
            expect(links[3]).to.equal('http://localhost:3006/category/sport/');
            expect(links[4]).to.equal('http://localhost:3006/category/design/');
            expect(links[5]).to.equal('http://localhost:3006/category/tech/');
            expect(links[6]).to.equal('http://localhost:3006/login');
            expect(links[7]).to.equal('http://localhost:3006/signup');
        });
        it('should lead to the correct pages when clicked', () => {
            let menuItems;
            const hrefs = $$('#main-menu a').map((e) => { return e.getAttribute('href'); });
            hrefs.forEach((href, i) => {
                menuItems = $$('#main-menu a');
                menuItems[i].click();
                expect(hrefs[i]).to.be.equal(browser.getUrl());
            });
        });
    });

    describe('Login page', () => {
        it('should login and redirect to home with correct cred', () => {
            browser.url('http://localhost:3006/login');
            browser.setValue('#username', 'didexe');
            browser.setValue('#password', '1234');
            browser.submitForm('#login');
            expect(browser.getUrl()).to.be.equal('http://localhost:3006/');
        });
        it('should redirect to login with incorrect cred', () => {
            browser.url('http://localhost:3006/login');
            browser.setValue('#username', 'didexe');
            browser.setValue('#password', '12342');
            browser.submitForm('#login');
            expect(browser.getUrl()).to.be.equal('http://localhost:3006/login');
        });
    });

    describe('Sign up page', () => {
        it('should sign up and redirect to login with correct cred', () => {
            browser.url('http://localhost:3006/signup');
            browser.setValue('#email', 'didexe@gmail.com');
            browser.setValue('#username', 'didexe2');
            browser.setValue('#password', '1234');
            browser.setValue('#confirm', '1234');
            browser.submitForm('#signup');
            expect(browser.getUrl()).to.be.equal('http://localhost:3006/login');
        });
        it('should stay on signup with incorrect cred', () => {
            browser.url('http://localhost:3006/signup');
            browser.setValue('#email', 'didexe@gmail.com');
            browser.setValue('#username', 'didex');
            browser.setValue('#password', '1234');
            browser.setValue('#confirm', '1235');
            browser.submitForm('#signup');
            expect(browser.getUrl()).to.be.equal('http://localhost:3006/signup');
        });
        it('should stay on signup with existing cred', () => {
            browser.url('http://localhost:3006/signup');
            browser.setValue('#email', 'didexe@gmail.com');
            browser.setValue('#username', 'didexe');
            browser.setValue('#password', '1234');
            browser.setValue('#confirm', '1234');
            browser.submitForm('#signup');
            expect(browser.getUrl()).to.be.equal('http://localhost:3006/signup');
        });
    });
});
