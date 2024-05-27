const StringField = require('./StringField');
const ValidationError = require('../utils/ValidationError');
const { parse } = require('libphonenumber-js');

class PhoneNumberField extends StringField{
    constructor(name, maxLength, minLength=null, isNull=false, isEmpty=false, defaultValue=null, isUnique=false, errorMessages={}, validators=[]){
        super(name, maxLength, minLength, isNull, isEmpty, defaultValue, isUnique, errorMessages, validators);

        this.validators = [this._validatePhoneNumberIsValid.bind(this), ...this.validators];
    }

    _validatePhoneNumberIsValid(value){
        const phoneNumber = parse(value);
        if(!phoneNumber || !phoneNumber.phone){
            throw new ValidationError('invalid', 'phone number must be a valid phone number');
        } 
    }
}

module.exports = PhoneNumberField;