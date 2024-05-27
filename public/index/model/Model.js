const { ValidationFailure, ValidationSuccess } = require('../validators/utils/ValidationResult');

class Model{
    /**
     * Create a new Model instance.
     * @param {Object} fields - The fields of the model.
     */
    constructor(fields){
        this.fields = fields;
    }

    /**
     * Validate the values against the model fields.
     * @param {Object} valuesObject - The values to be validated.
     * @param {Object[]} dataSet - Dataaet to validate uniqueness. 
     * @returns {ValidationResult}
     */
    validate(valuesObject, dataSet=[]){
        let errors = {};
        let data = {};
        Object.entries(this.fields).forEach(([name, field]) => {
            const value = valuesObject?.[name];
            const result = field.validate(value, dataSet);
            if(result instanceof ValidationFailure){
                errors[name] = result.errors;
            }

            if(result instanceof ValidationSuccess){
                data[name] = result.data;
            }
        });

        if(Object.keys(errors).length > 0) return new ValidationFailure(errors);
        return new ValidationSuccess(data);
    }
}

module.exports = Model;