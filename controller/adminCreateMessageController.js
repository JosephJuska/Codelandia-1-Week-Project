const { METHODS } = require("../utils/constants");
const { generateResponseOptions, generateResponseHTML, generateResponseMethodNotAllowed } = require("../utils/generateResponse");
const adminService = require('../service/adminService');

const adminCreateMessageController = (req, res) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getCreateMessageHandler(res);
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed(res);
    }
}

const getCreateMessageHandler = (res) => {
    const headerEJS = adminService.getEJS('layout/header.ejs');
    const footerEJS = adminService.getEJS('layout/footer.ejs');
    const createMessageEJS = adminService.getEJS('pages/createMessage.ejs');

    const renderedHeader = adminService.renderEJS(headerEJS, {title: 'Create Message', activePage: 'create', styleSheets: ['/default/bootstrap.min.css']});
    const renderedFooter = adminService.renderEJS(footerEJS, {scripts: ['/createMessage/bundles/bundle.js']});
    const renderedCreateMessage = adminService.renderEJS(createMessageEJS);

    const body = renderedHeader + renderedCreateMessage + renderedFooter;
    generateResponseHTML(res, body);
}

module.exports = adminCreateMessageController;