const ApiRequestHandler = require('./baseRequest');
const { MESSAGE_URL } = require('../utils/baseRequestPaths');
const _service = new ApiRequestHandler();

const putMessageRequest = async (id, data) => {
    return await _service.put(MESSAGE_URL + id, data);
}

module.exports = putMessageRequest;