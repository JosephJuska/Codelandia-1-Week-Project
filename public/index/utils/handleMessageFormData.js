const name = document.getElementById('form-contact-name');
const email = document.getElementById('form-contact-email');
const subject = document.getElementById('form-contact-subject');
const message = document.getElementById('form-contact-message');

const getMessageFormData = () => {
    const data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    }

    return data;
}

module.exports = {
    getMessageFormData
}