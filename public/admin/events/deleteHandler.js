const deleteMessageRequest = require('../request/deleteMessageRequest');
const generateSuccess = require('../utils/generateSuccess');
const generateError = require('../utils/generateError');
const config = require('../utils/config');

const messagesURL = config.baseUrl + 'admin';

const id = document.getElementById('id').value;
const container = document.getElementById('container');
const form = document.getElementById('form');

const deleteHandler = async () => {
    const result = await deleteMessageRequest(id);
    if(result.success){
        const a = document.createElement('a');
        a.href = messagesURL;
        a.classList.add('btn', 'btn-primary');
        a.textContent = 'Return';

        container.removeChild(form);
        container.appendChild(a);
        generateSuccess('Message deleted successfully');
    }else{
        generateError(result.error);
    }
};

module.exports = deleteHandler;