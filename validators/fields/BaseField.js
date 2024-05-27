const { ValidationResult, ValidationFailure, ValidationSuccess } = require("../utils/ValidationResult");
const ValidationError = require('../utils/ValidationError');

class BaseField{
    /**
     * Create a new BaseField instance.
     * @param {string} name - The name of the field.
     * @param {boolean} isNull - Indicates if null value is allowed.
     * @param {boolean} isEmpty - Indicates if empty value is allowed.
     * @param {any} defaultValue - The default value of the field.
     * @param {boolean} isUnique - Indicates if the field is unique.
     * @param {Object} errorMessages - Custom error messages for validation errors.
     * @param {Function[]} validators - Custom validators for additional validation.
     */
    constructor(name, isNull=false, isEmpty=false, defaultValue=null, isUnique=false, errorMessages={}, validators=[]){
        this.name = name;
        this.isNull = isNull;
        this.isEmpty = isEmpty;
        this.defaultValue = defaultValue;
        this.isUnique = isUnique;
        this.errorMessages = this._generateErrorMessages(errorMessages);
        this.validators = validators;
    }

    /**
     * Validate the value of the field.
     * @param {any} value - The value to be validated.
     * @param {Object[]} data - The data to validate uniqueness.
     * @returns {ValidationResult}
     */
    validate(value, data=[]){
        let errors = {};
        let isNull = false;
        let isEmpty = false;
        let result;

        result = this._useValidator(value, this._validateIsNotNull);
        if(result) isNull = true;

        if(!this.isNull && isNull){
            errors[result.type] = result.message;
            return new ValidationFailure(errors);
        }

        result = this._useValidator(value, this._validateIsNotEmpty);
        if(result) isEmpty = true;

        if(!this.isEmpty && isEmpty){
            errors[result.type] = result.message;
            return new ValidationFailure(errors, value);
        }
        
        if((isEmpty || isNull) && this.defaultValue !== null){
            value = this.defaultValue;
            isEmpty = false;
            isNull = false;
        }

        if(isNull) return new ValidationSuccess();
        if(isEmpty) return new ValidationSuccess('');

        result = this._useValidator(value, this._validateType);
        if(result){
            errors[result.type] = result.message;
            return new ValidationFailure(errors, value);
        }

        if(this.isUnique){
            result = this._useValidator(value, this._validateIsUnique(data));
            if(result){
                errors[result.type] = result.message;
                return new ValidationFailure(errors, value);
            }
        }

        for(const validator of this.validators){
            const bindedValidator = validator.bind(this);
            result = this._useValidator(value, bindedValidator);
            if(result) errors[result.type] = result.message;
        }

        if(Object.keys(errors).length > 0) return new ValidationFailure(errors, value);

        return new ValidationSuccess(value);
    }

    _generateErrorMessages(errorMessages){
        const defaultErrorMessages = {
            'null': `${this.name} cannot be null`,
            'empty': `${this.name} cannot be empty`,
            'unique': `${this.name} must be unique`,
        };

        return {...defaultErrorMessages, ...errorMessages};
    }

    _validateIsNotNull(value){
        if(value === undefined || value === null){
            throw new ValidationError('null');
        }
    }

    _validateIsNotEmpty(value){
        if(typeof value === 'string' && value.trim() === ''){
            throw new ValidationError('empty');
        }
    }
    
    _validateType(value){
        throw new SyntaxError('_validateType method must be implemented');
    }

    _validateIsUnique(data){
        return (value) => {
            if(data.length !== 0){
                const instance = data.find(data => data[this.name] === value);
                if(instance) throw new ValidationError('unique');
            }
        }
    }

    _useValidator(value, validator){
        try{
            validator(value);
        }catch(error){
            if(error instanceof ValidationError){
                const errorMessage = this.errorMessages[error.type] ? this.errorMessages[error.type] : error.message;
                return {message: errorMessage, type: error.type}
            }

            throw error;
        }
    }
}

module.exports = BaseField;