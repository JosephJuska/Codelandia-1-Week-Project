const ApiRequestHandler = require('./baseRequest');
const { MESSAGE_URL } = require('../utils/baseRequestPaths');
const _service = new ApiRequestHandler();

const getMessageRequest = async (id) => {
    return await _service.get(MESSAGE_URL + id);
}

module.exports = getMessageRequest;