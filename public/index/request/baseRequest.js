const config = require('../utils/config');
const { METHODS, CONTENT_TYPES } = require('../utils/constants');
const Error = require('../model/ErrorModel');
const { ResponseError, ResponseSuccess } = require('../model/ResponseModel');

class ApiRequestHandler {
    async get(path) {
        try {
            const response = await fetch(config.baseUrl + path);
            const contentType = response.headers.get('content-type');
            const body = contentType && contentType === 'application/json'
            ? await response.json()
            : await response.text();
            if (!response.ok) {
                const error = new Error(response.status, body, CONTENT_TYPES[contentType]);
                return new ResponseError(error);
            }
            return new ResponseSuccess(body);
        } catch (err) {
            const error = new Error(500, err.message, CONTENT_TYPES['text/plain']);
            return new ResponseError(error);
        }
    }

    async post(path, data) {
        try {
            const response = await fetch(config.baseUrl + path, {
                method: METHODS.POST,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const contentType = response.headers.get('content-type');
            const body = contentType && contentType === 'application/json'
            ? await response.json()
            : await response.text();
            if (!response.ok) {
                const error = new Error(response.status, body, CONTENT_TYPES[contentType]);
                return new ResponseError(error);
            }
            return new ResponseSuccess(body);
        } catch (err) {
            const error = new Error(500, err.message, CONTENT_TYPES['text/plain']);
            return new ResponseError(error);
        }
    }

    async put(path, data) {
        try {
            const response = await fetch(config.baseUrl + path, {
                method: METHODS.PUT,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const contentType = response.headers.get('content-type');
            const body = contentType && contentType === 'application/json'
            ? await response.json()
            : await response.text();
            if (!response.ok) {
                const error = new Error(response.status, body, CONTENT_TYPES[contentType]);
                return new ResponseError(error);
            }
            return new ResponseSuccess(body);
        } catch (err) {
            const error = new Error(500, err.message, CONTENT_TYPES['text/plain']);
            return new ResponseError(error);
        }
    }

    async delete(path) {
        try {
            const response = await fetch(config.baseUrl + path, {
                method: METHODS.DELETE
            });
            const contentType = response.headers.get('content-type');
            const body = contentType && contentType === 'application/json'
            ? await response.json()
            : await response.text();
            if (!response.ok) {
                const error = new Error(response.status, body, CONTENT_TYPES[contentType]);
                return new ResponseError(error);
            }
            return new ResponseSuccess(body);
        } catch (err) {
            const error = new Error(500, err.message, CONTENT_TYPES['text/plain']);
            return new ResponseError(error);
        }
    }
}

module.exports = ApiRequestHandler;
