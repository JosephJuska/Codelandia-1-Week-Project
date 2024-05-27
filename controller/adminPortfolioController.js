const { METHODS } = require("../utils/constants");
const { generateResponseOptions, generateResponseHTML, generateResponseMethodNotAllowed } = require("../utils/generateResponse");
const adminService = require('../service/adminService');
const portfolioService = require('../service/portfolioService');

const adminPortfolioController = (req, res) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getPortfolioHandler(res);
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed(res);
    }
}

const getPortfolioHandler = (res) => {
    const portfolio = portfolioService.getPortfolio();

    const headerEJS = adminService.getEJS('layout/header.ejs');
    const footerEJS = adminService.getEJS('layout/footer.ejs');
    const portfolioEJS = adminService.getEJS('pages/portfolio.ejs');

    const renderedHeader = adminService.renderEJS(headerEJS, {title: 'Portfolio', activePage: 'portfolio', styleSheets: ['/default/bootstrap.min.css']});
    const renderedFooter = adminService.renderEJS(footerEJS, {scripts: ['/portfolio/bundles/bundle.js']});
    const renderedPortfolio = adminService.renderEJS(portfolioEJS, {portfolio: portfolio});

    const body = renderedHeader + renderedPortfolio + renderedFooter;
    generateResponseHTML(res, body);
}

module.exports = adminPortfolioController;