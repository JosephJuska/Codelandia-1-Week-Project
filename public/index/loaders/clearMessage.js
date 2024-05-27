const generateSuccess = require('../utils/generateSuccess');

const clearMessage = async () => {
    const name = document.getElementById('form-contact-name');
    const email = document.getElementById('form-contact-email');
    const subject = document.getElementById('form-contact-subject');
    const message = document.getElementById('form-contact-message');

    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';

    generateSuccess('Message has been created successfully');
}

module.exports = clearMessage;