const StringField = require('./StringField');
const ValidationError = require('../utils/ValidationError');

class EmailField extends StringField {
    /**
     * Create a new EmailField instance.
     * @param {string} name - The name of the field.
     * @param {number} maxLength - The maximum length of the field.
     * @param {number} minLength - The minimum length of the field.
     * @param {boolean} isNull - Indicates if null value is allowed.
     * @param {boolean} isEmpty - Indicates if empty value is allowed.
     * @param {any} defaultValue - The default value of the field.
     * @param {boolean} isUnique - Indicates if the field is unique.
     * @param {Object} errorMessages - Custom error messages for validation errors.
     * @param {Function[]} validators - Custom validators for additional validation.
     */
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