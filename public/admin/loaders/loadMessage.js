const getMessageRequest = require('../request/getMessageRequest');
const generateError = require('../utils/generateError');
const generateSuccess = require('../utils/generateSuccess');

const loadMessage = async () => {
    const id = document.getElementById('id').value;
    const result = await getMessageRequest(id);
    if(result.success){
        const data = result.data;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        const createdAt = document.getElementById('created-at');
        const updatedAt = document.getElementById('updated-at');

        name.value = data.name;
        email.value = data.email;
        subject.value = data.subject;
        message.value = data.message;
        createdAt.value = data.createdAt;
        updatedAt.value = data.updatedAt;
        generateSuccess('Message updated successfully');
    }else{
        generateError('Error happened while loading the message');
    }
}

module.exports = loadMessage;