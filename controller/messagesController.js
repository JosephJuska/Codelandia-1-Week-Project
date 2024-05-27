const { METHODS } = require("../utils/constants");
const { generateResponseMethodNotAllowed, generateResponseDataNotFound, generateResponseDataFound, generateResponseValidationError, generateResponseDataCreated, generateResponse, generateResponseDataDeleted, generateResponseOptions, generateResponseDataUpdated, } = require("../utils/generateResponse");
const messagesService = require('../service/messagesService');
const bodyParser = require("../utils/bodyParser");
const MessageModel = require('../model/MessageModel');
const isSame = require('../utils/isSame');

const defaultMessagesController = async (req, res, param) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getMessagesHandler(res, param)
            break;

        case METHODS.POST:
            await postMessagesHandler(req, res, param);
            break;

        case METHODS.PUT:
            await putMessagesHandler(req, res, param);
            break;

        case METHODS.DELETE:
            deleteMessagesHandler(res, param);
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.POST, METHODS.PUT, METHODS.DELETE, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed(res);
    }
};

const getMessagesHandler = (res, param) => {
    if(!param){
        const messages = messagesService.getMessages();
        const body = JSON.stringify(messages);
        
        return generateResponseDataFound(res, body);
    }

    const message = messagesService.getMessage(param);
    if(!message){
        return generateResponseDataNotFound(res, 'message');
    }

    const body = JSON.stringify(message);
    
    generateResponseDataFound(res, body);
}

const postMessagesHandler = async (req, res, param) => {
    if(param) return generateResponseMethodNotAllowed(res);
    let requestBody;
    try{
        requestBody = await bodyParser(req);
    }catch(error){
        requestBody = {};
    }
    const messages = messagesService.getMessages();
    const result = MessageModel.validate(requestBody, messages);
    if(!result.success) return generateResponseValidationError(res, JSON.stringify(result.errors));

    const newMessage = messagesService.addMessage(result.data);
    const body = JSON.stringify(newMessage);
    generateResponseDataCreated(res, body);
}

const putMessagesHandler = async (req, res, param) => {
    if(!param) return generateResponseMethodNotAllowed(res);
    
    const message = messagesService.getMessage(param);
    if(!message) return generateResponseDataNotFound(res, 'message');

    let requestBody;
    try{
        requestBody = await bodyParser(req);
    }catch(error){
        requestBody = {};
    }

    const messages = messagesService.getMessages().filter(message => message.id !== param);
    const result = MessageModel.validate(requestBody, messages);
    if(!result.success) return generateResponseValidationError(res, JSON.stringify(result.errors));

    const newMessage = {id: param, ...result.data, createdAt: message.createdAt, updatedAt: message?.updatedAt};
    const same = isSame(message, newMessage, ['createdAt', 'updatedAt']);
    messagesService.updateMessage(newMessage, same);
    const body = JSON.stringify(newMessage);
    generateResponseDataUpdated(res, body);
}

const deleteMessagesHandler = (res, param) => {
    if(!param) return generateResponseMethodNotAllowed(res);

    const message = messagesService.getMessage(param);
    if(!message) return generateResponseDataNotFound(res, 'message');

    messagesService.deleteMessage(param);
    generateResponseDataDeleted(res);
}

module.exports = {
    defaultMessagesController,
}