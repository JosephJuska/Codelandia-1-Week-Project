const cleanErrorsOnDataChange = require("../utils/cleanErrorsOnDataChange");

const onDataChangeHandler = () => {
    const name = document.getElementById('form-contact-name');
    const email = document.getElementById('form-contact-email');
    const subject = document.getElementById('form-contact-subject');
    const message = document.getElementById('form-contact-message');

    const nameErrorContainer = document.querySelector('.name-errors');
    const subjectErrorContainer = document.querySelector('.subject-errors');
    const messageErrorContainer = document.querySelector('.message-errors');
    const emailErrorContainer = document.querySelector('.email-errors');

    cleanErrorsOnDataChange(name, nameErrorContainer);
    cleanErrorsOnDataChange(subject, subjectErrorContainer);
    cleanErrorsOnDataChange(email, emailErrorContainer);
    cleanErrorsOnDataChange(message, messageErrorContainer);
}

module.exports = onDataChangeHandler;