const StringField = require('./StringField');
const ValidationError = require('../utils/ValidationError');
const urlValidator = require('valid-url');

class URLField extends StringField{
    /**
     * Create a new URLField instance.
     * @param {string} name - The name of the field.
     * @param {number} maxLength - The maximum length allowed for the url.
     * @param {number} minLength - The minimum length allowed for the url.
     * @param {boolean} isNull - Indicates if null value is allowed.
     * @param {boolean} isEmpty - Indicates if empty value is allowed.
     * @param {any} defaultValue - The default value of the field.
     * @param {boolean} isUnique - Indicates if the field is unique.
     * @param {Object} errorMessages - Custom error messages for validation errors.
     * @param {Function[]} validators - Custom validators for additional validation.
     */
    constructor(name, maxLength, minLength=null, isNull=false, isEmpty=false, defaultValue=null, isUnique=false, errorMessages={}, validators=[]){
        super(name, maxLength, minLength, isNull, isEmpty, defaultValue, isUnique, errorMessages, validators);

        this.validators = [this._validateURLIsValid.bind(this), ...this.validators];
    }

    _validateURLIsValid(value){
        if(!urlValidator.isUri(value)) throw new ValidationError('invalid', `${this.name} must be a valid URL`);
    }   
}

module.exports = URLField;