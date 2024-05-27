const { METHODS } = require("../utils/constants");
const { generateResponseMethodNotAllowed, generateResponseOptions, generateResponseDataFound, generateResponseValidationError, generateResponseDataUpdated, } = require("../utils/generateResponse");
const portfolioService = require('../service/portfolioService');
const PortfolioModel = require('../model/PortfolioModel');
const bodyParser = require("../utils/bodyParser");

const portfolioController = async (req, res) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getPortfolioHandler(res);
            break;

        case METHODS.PUT:
            await putPortfolioHandler(req, res);
            break;

        case METHODS.OPTIONS:
            generateResponseOptions(res, [METHODS.GET, METHODS.PUT, METHODS.OPTIONS]);
            break;

        default:
            generateResponseMethodNotAllowed(res);
    }
};

const getPortfolioHandler = (res) => {
    const portfolio = portfolioService.getPortfolio();
    const body = JSON.stringify(portfolio);
    generateResponseDataFound(res, body);
}

const putPortfolioHandler = async (req, res) => {
    let requestBody;
    try{
        requestBody = await bodyParser(req);
    }catch(error){
        requestBody = {};
    }

    const result = PortfolioModel.validate(requestBody, [{phone2: requestBody?.phone1, email2: requestBody?.email1}]);
    if(!result.success) return generateResponseValidationError(res, JSON.stringify(result.errors));

    portfolioService.updatePortfolio(result.data);
    const body = JSON.stringify(result.data);
    generateResponseDataUpdated(res, body);
}

module.exports = portfolioController;