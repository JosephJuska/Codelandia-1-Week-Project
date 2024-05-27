const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const createdAt = document.getElementById('createdAt');
const updatedAt = document.getElementById('updatedAt');

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