const { METHODS } = require("../utils/constants");
const { generateResponseMethodNotAllowed, generateResponseDataFound, generateResponse, generateResponseOptions } = require("../utils/generateResponse");
const messagesService = require('../service/messagesService');
const ResponseConfig = require("../utils/responseConfig");

const messagesPageController = (req, res, param) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getMessagesPageHandler(res, param)
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed(res);
    }
};

const getMessagesPageHandler = (res, param) => {
    const messages = messagesService.getMessages();
    const messagesCount = messages.length;
    const messagePerPage = +process.env.MESSAGE_PER_PAGE || 10;
    const pageCount = Math.ceil(messagesCount / messagePerPage);

    if(!param){
        const body = JSON.stringify({pageCount, messagePerPage});
        return generateResponseDataFound(res, body);
    }

    if(param < 1){
        const responseConfig = new ResponseConfig(
            res, 400, {}, 'Page number must be greater than zero'
        );

        return generateResponse(responseConfig);
    }

    if(param > pageCount){
        const responseConfig = new ResponseConfig(
            res, 400, {}, 'Page number must not exceed page count'
        );

        return generateResponse(responseConfig);
    }
    console.log(messagePerPage);
    const startIndex = (param - 1) * messagePerPage;
    const endIndex = param * messagePerPage > messagesCount ? messagesCount : param * messagePerPage;
    const data = messages.slice(startIndex, endIndex);
    const body = JSON.stringify(data);
    generateResponseDataFound(res, body);
}

module.exports = {
    messagesPageController
}