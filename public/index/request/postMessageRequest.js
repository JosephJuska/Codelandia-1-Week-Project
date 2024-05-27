const ApiRequestHandler = require('./baseRequest');
const { MESSAGE_URL } = require('../utils/baseRequestPaths');
const _service = new ApiRequestHandler();

const postMessageRequest = async (requestData) => {
    return await _service.post(MESSAGE_URL, requestData);
}

module.exports = postMessageRequest;