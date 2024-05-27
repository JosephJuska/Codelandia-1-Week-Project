const MessageModel = require("../model/MessageModel");
const putMessageRequest = require("../request/putMessageRequest");
const { getMessageFormData } = require("../utils/handleMessageFormData");
const generateValidationError = require('../utils/generateValidationError');
const generateError = require('../utils/generateError');
const loadMessage = require("../loaders/loadMessage");

const id = document.getElementById('id').value;

const editHandler = async () => {
    const messageData = getMessageFormData();
    const validationResult = MessageModel.validate(messageData);
    if(!validationResult.success){
        generateValidationError(validationResult.errors);
    }else{
        const result = await putMessageRequest(id, validationResult.data);
        if(result.success){
            await loadMessage();
        }else{
            generateError(result.error);
        }
    }
};

module.exports = editHandler;