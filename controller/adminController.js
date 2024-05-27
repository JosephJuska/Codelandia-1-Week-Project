const { METHODS } = require("../utils/constants");
const { generateResponseOptions, generateResponseNotFound, generateResponseHTML, generateResponseMethodNotAllowed } = require("../utils/generateResponse");
const adminService = require('../service/adminService');
const dotenv = require('dotenv');
const { getMessages } = require("../service/messagesService");

const adminController = (req, res, param) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getAdminHandler(res, param);
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed(res);
    }
}

const getAdminHandler = (res, param) => {
    dotenv.config();

    if(param && param <= 0) return generateResponseNotFound(res);

    let messages = getMessages();
    const messagePerPage = process.env.MESSAGE_PER_PAGE || 5;
    const pageCount = messages.length > 0 ? Math.ceil(messages.length / messagePerPage) : 0;
    if(param > pageCount) return generateResponseNotFound(res);

    let pageNumbers = null;
    let activePage = null;
    if(pageCount === 0) messages = [];
    else pageNumbers = [];
    if(!param && pageCount > 0){
        for(let i = 1; i <= (pageCount > 5 ? 5 : pageCount); i++){
            pageNumbers.push(i);
        };

        if(pageCount > Math.max(...pageNumbers)) pageNumbers.push(pageCount);

        messages = messages.slice(0, (messagePerPage > messages.length ? messages.length : messagePerPage));
        activePage = 1;
    }else if(param && pageCount > 0){
        const rangeIndex = Math.ceil(param / 5);
        let startPage = rangeIndex * 5 - 4;
        let endPage = rangeIndex * 5 > pageCount ? pageCount : rangeIndex * 5;
        for(let i = startPage; i <= endPage; i++){
            pageNumbers.push(i);
        };

        if(pageCount > Math.max(...pageNumbers)) pageNumbers.push(pageCount);

        if(pageNumbers.length < 5){
            pageNumbers = []; 
            startPage = pageCount - 4 <= 0 ? 1 : pageCount - 4;
            endPage = pageCount;
            for(let i = startPage; i <= endPage; i++){
                pageNumbers.push(i);
            }
        } 

        const startIndex = rangeIndex * 5 - 5;
        const endIndex = rangeIndex * 5 > messages.length ? messages.length : rangeIndex * 5;
        messages = messages.slice(startIndex, endIndex);
        activePage = param;
    }

    const headerEJS = adminService.getEJS('layout/header.ejs');
    const footerEJS = adminService.getEJS('layout/footer.ejs');
    const messagesEJS = adminService.getEJS('pages/messages.ejs');

    const renderedHeader = adminService.renderEJS(headerEJS, {title: 'Admin', activePage: 'messages', styleSheets: ['/default/bootstrap.min.css']});
    const renderedFooter = adminService.renderEJS(footerEJS, {scripts: null});
    const renderedMessages = adminService.renderEJS(messagesEJS, {messages: messages, pageNumbers: pageNumbers, activePage: activePage});

    const body = renderedHeader + renderedMessages + renderedFooter;
    generateResponseHTML(res, body);
}

module.exports = adminController;