const { getMessage } = require("../service/messagesService");
const { METHODS } = require("../utils/constants");
const { generateResponseOptions, generateResponseMethodNotAllowed, generateResponseNotFound } = require("../utils/generateResponse");
const adminService = require('../service/adminService');
const { generateResponseHTML } = require('../utils/generateResponse');

const adminMessageController = (req, res, param) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getAdminMessageHandler(res, param);
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed();
    }
}

const getAdminMessageHandler = (res, param) => {
    if(!param || (param && param <= 0)) return generateResponseNotFound(res);
    
    const message = getMessage(param);
    if(!message) return generateResponseNotFound(res);

    const headerEJS = adminService.getEJS('layout/header.ejs');
    const footerEJS = adminService.getEJS('layout/footer.ejs');
    const messagesEJS = adminService.getEJS('pages/message.ejs');

    const renderedHeader = adminService.renderEJS(headerEJS, {title: `${message.subject}`, activePage: null, styleSheets: ['/default/bootstrap.min.css']});
    const renderedFooter = adminService.renderEJS(footerEJS, {scripts: ['/admin/bundles/bundle.js']});
    const renderedMessages = adminService.renderEJS(messagesEJS, {message: message});

    const body = renderedHeader + renderedMessages + renderedFooter;
    generateResponseHTML(res, body);
}

module.exports = adminMessageController;