const { expect } = require('chai');

describe('Home page', function() {
    before(() => {
        browser.url('http://localhost:3006');
    });
    it('should have the right title - the fancy generator way', function() {
        setTimeout(() => {
            browser
                .getValue('.brand-logo').then((logo) => {
                    expect(logo).to.equal('MyNews');
        });
        }, 1000);
    });
});
