const PortfolioModel = require('../model/PortfolioModel');
const putPortfolioRequest = require('../request/putPortfolioRequest');
const { handlePortfolioFormData } = require("../utils/handlePortfolioFormData");
const generateValidationError = require('../utils/generateValidationError');
const loadPortfolio = require('../loaders/loadPortfolio');
const generateError = require('../utils/generateError');

const editHandler = async () => {
    const portfolioData = handlePortfolioFormData();
    const validationResult = PortfolioModel.validate(portfolioData, [{phone2: portfolioData.phone1, email2: portfolioData.email1}]);
    if(!validationResult.success){
        generateValidationError(validationResult.errors);
    }else{
        const result = await putPortfolioRequest(validationResult.data);
        if(result.success){
            await loadPortfolio();
        }else{
            generateError(result.error);
        }
    }
};

module.exports = editHandler;