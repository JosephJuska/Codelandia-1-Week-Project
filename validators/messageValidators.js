const ValidationError = require("./utils/ValidationError");

const validateNameContainsLetters = (value) => {
    const regex = /^[a-zA-Z]+$/;
    if(!regex.test(value)){
        throw new ValidationError('invalid', 'name must only contain letters');
    }
}

module.exports = {
    validateNameContainsLetters,
}