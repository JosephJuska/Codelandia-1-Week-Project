class ValidationResult{
    /**
     * Create a new ValidationResult instance.
     * @param {boolean} success - Indicates whether the validation was successful.
     * @param {Object} errors - Validation errors.
     * @param {any} data - Validated data.
     */
    constructor(success, errors=null, data=null){
        this.success = success;
        this.errors = errors;
        this.data = data;
    }
}

class ValidationSuccess extends ValidationResult{
    /**
     * Create a new ValidationSuccess instance.
     * @param {any} data - Validated data.
     */
    constructor(data){
        super(true, null, data);
    }
}

class ValidationFailure extends ValidationResult{
    /**
     * Create a new ValidationFailure instance.
     * @param {Object} errors - Validation errors.
     * @param {any} data - Validated data.
     */
    constructor(errors, data = null){
        super(false, errors, data);
    }
}

module.exports = {
    ValidationSuccess,
    ValidationFailure,
    ValidationResult
}