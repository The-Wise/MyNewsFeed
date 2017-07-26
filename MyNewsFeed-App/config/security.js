const helmet = require('helmet'),
     ienoopen = require('ienoopen')
     frameguard = require('frameguard');

const csp = helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'maxcdn.bootstrapcdn.com'", "'cdnjs.cloudflare.com'", "'bootswatch.com'"],
        scriptSrc: ["'self'", "'maxcdn.bootstrapcdn.com'"]
    }
});

const setSettings = (app) => {
  app.use(csp);
  app.use(ienoopen());
  app.use(frameguard({ action: 'deny' }));

  app.disable('x-powered-by')
};

module.exports = setSettings;

/*  
    CSP предпазва от cross-site scripting
        Какво е CSP 
            -- https://github.com/helmetjs/csp
        Какаво е Cross-Site Scripting XSS
            -- https://www.acunetix.com/websitesecurity/cross-site-scripting/

    Какво е ienoopen 
        -- https://github.com/helmetjs/ienoopen

    Frameguard предпазва от неща като clickjacking 
        Какво е frameguard
            -- https://github.com/helmetjs/frameguard
        Какво е clickjacking
            -- https://www.owasp.org/index.php/Clickjacking
*/ 