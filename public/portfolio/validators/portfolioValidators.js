const ValidationError = require("./utils/ValidationError");

const validateFullName = (value) => {
    const regex = /^[A-Za-z][A-Za-z\s]*$/;
    if(!regex.test(value)){
        throw new ValidationError('invalid', 'name must be a valid name');
    }
}

const validateTwitterUsername = (value) => {
    const regex = /\s/;
    if(regex.test(value.trim())){
        throw new ValidationError('invalid', 'twitter username cannot have any spaces');
    }
}

module.exports = {
    validateFullName,
    validateTwitterUsername
}