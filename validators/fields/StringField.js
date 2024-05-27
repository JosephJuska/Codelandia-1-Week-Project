const BaseField = require('./BaseField');
const ValidationError = require('../utils/ValidationError');

class StringField extends BaseField{
    /**
     * Create a new StringField instance.
     * @param {string} name - The name of the field.
     * @param {number} maxLength - The maximum length allowed for the string.
     * @param {number} minLength - The minimum length allowed for the string.
     * @param {boolean} isNull - Indicates if null value is allowed.
     * @param {boolean} isEmpty - Indicates if empty value is allowed.
     * @param {any} defaultValue - The default value of the field.
     * @param {boolean} isUnique - Indicates if the field is unique.
     * @param {Object} errorMessages - Custom error messages for validation errors.
     * @param {Functionp[]} validators - Custom validators for additional validation.
     */
    constructor(name, maxLength, minLength=null, isNull=false, isEmpty=false, defaultValue=null, isUnique=false, errorMessages={}, validators=[]){
        super(name, isNull, isEmpty, defaultValue, isUnique, errorMessages, validators);
        this.minLength = minLength;
        this.maxLength = maxLength;

        this.errorMessages = {type: `${this.name} must be a string`, length: this._generateLengthErrorMessage(), ...this.errorMessages};

        this.validators = [this._validateLength.bind(this), ...this.validators];
    }

    _generateLengthErrorMessage(){
        if(this.minLength) return `${this.name} must be between ${this.minLength} and ${this.maxLength} characters long`;

        return `${this.name} must be less than ${this.maxLength} characters long`;
    }

    _validateType(value){
        if(typeof value !== 'string'){
            throw new ValidationError('type');
        }
    }

    _validateLength(value){
        if(value.length > this.maxLength || (this.minLength !== null && value.length < this.minLength)){
            throw new ValidationError('length');
        }
    }
}

module.exports = StringField;