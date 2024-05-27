const cleanErrorsOnDataChange = require("../utils/cleanErrorsOnDataChange");

const onDataChangeHandler = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

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