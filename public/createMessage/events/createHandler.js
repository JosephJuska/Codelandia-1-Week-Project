const MessageModel = require("../model/MessageModel");
const postMessageRequest = require('../request/postMessageRequest');
const { getMessageFormData } = require("../utils/handleMessageFormData");
const generateValidationError = require('../utils/generateValidationError');
const clearMessage = require('../loaders/clearMessage');
const generateError = require('../utils/generateError');

const createHandler = async () => {
    const messageData = getMessageFormData();
    const validationResult = MessageModel.validate(messageData);
    if(!validationResult.success){
        generateValidationError(validationResult.errors);
    }else{
        const result = await postMessageRequest(validationResult.data);
        if(result.success){
            clearMessage();
        }else{
            generateError(result.error)
        }
    }
};

module.exports = createHandler;