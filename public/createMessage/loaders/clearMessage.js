const generateSuccess = require('../utils/generateSuccess');

const clearMessage = async () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';

    generateSuccess('Message has been created successfully');
}

module.exports = clearMessage;