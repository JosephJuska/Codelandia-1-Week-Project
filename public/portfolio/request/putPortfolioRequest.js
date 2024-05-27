const ApiRequestHandler = require('./baseRequest');
const { PORTFOLIO_URL } = require('../utils/baseRequestPaths');
const _service = new ApiRequestHandler();

const putPortfolioRequest = async (data) => {
    return await _service.put(PORTFOLIO_URL, data);
}

module.exports = putPortfolioRequest;