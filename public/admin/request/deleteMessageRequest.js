const ApiRequestHandler = require('./baseRequest');
const { MESSAGE_URL } = require('../utils/baseRequestPaths');
const _service = new ApiRequestHandler();

const deleteMessageRequest = async (id) => {
    return await _service.delete(MESSAGE_URL + id);
}

module.exports = deleteMessageRequest;