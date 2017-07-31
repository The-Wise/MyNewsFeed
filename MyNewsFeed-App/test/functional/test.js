const { expect } = require('chai');
const waitSeconds = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });


describe('Home page', function() {
    before(() => {
        browser.url('http://localhost:3006');
        ;
        }
    });
    it('should have the right title - the fancy generator way', function() {
        waitSeconds(3)
        .then(() => )
        browser
            .getValue('.brand-logo').then((logo) => {
            expect(logo).to.equal('MyNews');
        });
    });
});
