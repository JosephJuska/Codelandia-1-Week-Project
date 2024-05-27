const StringField = require('./StringField');
const ValidationError = require('../utils/ValidationError');

class EmailField extends StringField {
    constructor(name, maxLength, minLength=null, isNull=false, isEmpty=false, defaultValue=null, isUnique=false, errorMessages={}, validators=[]){
        super(name, maxLength, minLength, isNull, isEmpty, defaultValue, isUnique, errorMessages, validators);
        this.validators = [this._validateEmail.bind(this), ...this.validators];
    }

    _validateEmail(value){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regex.test(value)){
            throw new ValidationError('invalid', `${this.name} must be a valid email address`);
        }
    }
}

module.exports = EmailField;