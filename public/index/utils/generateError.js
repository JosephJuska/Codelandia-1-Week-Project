const { CONTENT_TYPES } = require("./constants");
const generateValidationError = require("./generateValidationError");

const generateError = (error) => {
    const messageHolder = document.querySelector('.form-contact-status');
    if(error.contentType === CONTENT_TYPES["text/plain"]){
        error.message = error.status === 500 ? 'Unexpected error happended. Please try again in 5 minutes.' : error.message;
        messageHolder.innerHTML = `<p class="text-danger mb-0">${error.message}</p>`
    }else{
        generateValidationError(error.message);
    }
}

module.exports = generateError;