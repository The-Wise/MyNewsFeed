/* globals browser, $, $$ */
const { expect } = require('chai');

const waitSeconds = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

describe('Functional tests', () => {
    beforeEach(() => {
        browser.url('http://localhost:3006');
    });
    describe('Home page tests', () => {
        it('should have the correct logo name', () => {
            // waitSeconds(1)
            // .then(() => {
                const logo = $('.brand-logo').getText();
                logo.waitForExist(2000);
                    // .then((logo) => {
                        console.log('Logo ' + logo);
                        expect(logo).to.be.equal('BLABLA');
                        // done();
            // });
        });
        // it('shoul have the correct heading message', () => {
        //     setTimeout(() => {
        //         browser
        //             .getValue('h3')
        //             .then((heading) => {
        //                 console.log('Heading ' + heading);
        //                 expect(heading).to.be.equial('Latest articles from our channels 123');
        //         });
        //     }, 1000);
        // });
    });

    // describe('Main menu tests', () => {
    //     it('should have the correct menu items', () => {
    //         setTimeout(() => {
    //             // const menuItems = $$('#main-menu a').map((e) => { return e.getText(); });
    //             // const links = $$('#main-menu a');
    //             // menuItems.forEach((mi) => console.log(mi));
    //             // links.forEach((li) => console.log(li));
    //             // expect(menuItems[0]).to.equal('MY FEEDS');
    //         });
    //         }, 1000);
    //     });
    });
// });
