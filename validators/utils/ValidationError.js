class ValidationError extends Error {
    /**
     * Create a new ValidationError instance.
     * @param {string} type - The type of validation error.
     * @param {string} message - The error message.
     */
    constructor(type, message = '') {
        super(message);
        this.type = type;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ValidationError;