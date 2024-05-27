const StringField = require('./StringField');
const ValidationError = require('../utils/ValidationError');
const { parse } = require('libphonenumber-js');

class PhoneNumberField extends StringField{
    /**
     * Create a new PhoneNumberField instance.
     * @param {string} name - The name of the field.
     * @param {number} maxLength - The maximum length allowed for the field.
     * @param {number} minLength - The minimum length allowed for the field.
     * @param {boolean} isNull - Indicates if null value is allowed.
     * @param {boolean} isEmpty - Indicates if empty value is allowed.
     * @param {any} defaultValue - The default value of the field.
     * @param {boolean} isUnique - Indicates if the field is unique.
     * @param {Object} errorMessages - Custom error messages for validation errors.
     * @param {Function[]} validators - Custom validators for additional validation.
     */
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