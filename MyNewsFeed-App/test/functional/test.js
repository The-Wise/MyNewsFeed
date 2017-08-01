/* globals browser, $, $$ */
const { expect } = require('chai');

// const waitSeconds = (seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

describe('Functional tests', () => {
    beforeEach(() => {
        browser.url('http://localhost:3006');
        // waitSeconds(1);
    });
    describe('Home page tests', () => {
        it('should have the correct logo name', () => {
                const logo = $('.brand-logo').getText();
                        expect(logo).to.be.equal('rss_feed\nMyNews');
        });
        it('shoul have the correct heading message', () => {
                const heading = $('h3').getText();
                        expect(heading).to.be.equal('Latest articles from our channels');
        });
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
