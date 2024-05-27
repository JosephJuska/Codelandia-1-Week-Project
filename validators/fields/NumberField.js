const BaseField = require('./BaseField');
const ValidationError = require('../utils/ValidationError');

class NumberField extends BaseField{
    /**
     * Create a new NumberField instance.
     * @param {string} name - The name of the field.
     * @param {number} maxValue - The maximum value allowed for the number.
     * @param {number} minValue - The minimum value allowed for the number.
     * @param {boolean} isNull - Indicates if null value is allowed.
     * @param {boolean} isEmpty - Indicates if empty value is allowed.
     * @param {any} defaultValue - The default value of the field.
     * @param {boolean} isUnique - Indicates if the field is unique.
     * @param {Object} errorMessages - Custom error messages for validation errors.
     * @param {Function[]} validators - Custom validators for additional validation.
     */
    constructor(name, isInteger=true, maxValue=null, minValue=null, isNull=false, isEmpty=false, defaultValue=null, isUnique=false, errorMessages={}, validators=[]){
        super(name, isNull, isEmpty, defaultValue, isUnique, errorMessages, validators);
        this.isInteger = isInteger;
        this.minValue = minValue;
        this.maxValue = maxValue;

        this.errorMessages = {type: `${this.name} must be a number`, range: this._generateRangeErrorMessage(), ...this.errorMessages};

        this.validators = [this._validateRange.bind(this), this._validateNumberIsCorrectForm.bind(this), ...this.validators];
    }

    validate(value, data=[]){
        value = Number.parseFloat(value);
        if(Number.isNaN(value)) value = null;
        const result = super.validate(value, data);
        return result;
    }

    _generateRangeErrorMessage(){
        if(this.minValue !== null && this.maxValue !== null) return `${this.name} must be between ${this.minValue} and ${this.maxValue}`;

        if(this.minValue !== null) return `${this.name} must be bigger than or equal to ${this.minValue}`;

        if(this.maxValue !== null) return `${this.name} must be smaller than or equal to ${this.maxValue}`;
    }

    _validateType(value){
        if(typeof value !== 'number'){
            throw new ValidationError('type');
        }
    }

    _validateNumberIsCorrectForm(value){
        if(this.isInteger && !Number.isInteger(value)){
            throw new ValidationError('integer', `${this.name} must be an integer`);
        }
    }

    _validateRange(value){
        if((this.minValue !== null && value < this.minValue) || (this.maxValue !== null && value > this.maxValue)){
            throw new ValidationError('range');
        }
    }
}

module.exports = NumberField;