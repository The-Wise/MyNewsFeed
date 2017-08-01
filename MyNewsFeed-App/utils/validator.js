const constants = require('./constants.js');

const validateRegisterForm = (req, res) => {
        let haveAnyErrors;
        let errors;

        req.checkBody('name', constants.emptyNameMessage).notEmpty();
        req.checkBody('username', constants.emptyUsernameMessage).notEmpty();
        req.checkBody('email', constants.emptyEmailMessage).notEmpty();
        req.checkBody('email', constants.wrongEmailMessage).isEmail();
        req.checkBody('password', constants.emptyPasswordMessage).notEmpty();

        req.getValidationResult().then((results) => { 
            if (results.array().length === 0) {
                haveAnyErrors = false;
            } else {
                errors = results.array();
            }
         });

         if (haveAnyErrors === false) {
            return haveAnyErrors;
         }

        return errors;
};

const checkUsername = (username) => {
     return username.length >= constants.minUsernameLength &&
         username.length <= constants.maxUsernameLength;
};

module.exports = {
    validateRegisterForm,
};
