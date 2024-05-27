const ApiRequestHandler = require('./baseRequest');
const { PORTFOLIO_URL } = require('../utils/baseRequestPaths');
const _service = new ApiRequestHandler();

const getPortfolioRequest = async () => {
    return await _service.get(PORTFOLIO_URL);
}

module.exports = getPortfolioRequest;