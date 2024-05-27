const fillValidationErrors = require('./fillValidationErrors')

const generateValidationError = (errors) => {
    const nameErrorContainer = document.querySelector('.name-errors');
    nameErrorContainer.innerHTML = '';

    const subjectErrorContainer = document.querySelector('.subject-errors');
    subjectErrorContainer.innerHTML = '';

    const messageErrorContainer = document.querySelector('.message-errors');
    messageErrorContainer.innerHTML = '';

    const emailErrorContainer = document.querySelector('.email-errors');
    emailErrorContainer.innerHTML = '';
    
    fillValidationErrors(errors, nameErrorContainer, 'name');
    fillValidationErrors(errors, subjectErrorContainer, 'subject');
    fillValidationErrors(errors, messageErrorContainer, 'message');
    fillValidationErrors(errors, emailErrorContainer, 'email');
}

module.exports = generateValidationError;