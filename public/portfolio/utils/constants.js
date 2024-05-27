const METHODS = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
});

const CONTENT_TYPES = Object.freeze({
    'text/plain': 1,
    'application/json': 2,
});

module.exports = {
    METHODS,
    CONTENT_TYPES
};