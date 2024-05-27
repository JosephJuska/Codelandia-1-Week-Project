const { CONTENT_TYPES } = require("./constants");
const ResponseConfig = require("./responseConfig");

const generateResponseMethodNotAllowed = (res) => {
    const responseConfig = new ResponseConfig(
        res, 405, {}, 'Method Not Allowed'
    );

    generateResponse(responseConfig);
};

const generateResponseNotFound = (res) => {
    const responseConfig = new ResponseConfig(
        res, 404, {}, 'Not Found'
    );

    generateResponse(responseConfig);
};

const generateResponseServerError = (res) => {
    const responseConfig = new ResponseConfig(
        res, 500, {}, 'Internal Server Error'
    );

    generateResponse(responseConfig);
};

const generateResponseDataNotFound = (res, type) => {
    const responseConfig = new ResponseConfig(
        res, 404, {}, `${type} not found`
    );

    generateResponse(responseConfig);
}

const generateResponseValidationError = (res, errors) => {
    const responseConfig = new ResponseConfig(
        res, 400,
        {
            'Content-Type': CONTENT_TYPES['.json']
        },
        errors
    )

    generateResponse(responseConfig);
}

const generateResponseDataFound = (res, body) => {
    const responseConfig = new ResponseConfig(
        res, 200,
        {
            'Content-Type': CONTENT_TYPES['.json']
        },
        body
    );

    generateResponse(responseConfig);
}

const generateResponseDataCreated = (res, body) => {
    const responseConfig = new ResponseConfig(
        res, 201,
        {
            'Content-Type': CONTENT_TYPES['.json']
        },
        body
    )

    generateResponse(responseConfig);
}

const generateResponseDataUpdated = (res, body) => {
    const responseConfig = new ResponseConfig(
        res, 200,
        {
            'Content-Type': CONTENT_TYPES['.json']
        },
        body
    );

    generateResponse(responseConfig);
}

const generateResponseDataDeleted = (res) => {
    const responseConfig = new ResponseConfig(
        res, 204, {}, ''
    );

    generateResponse(responseConfig);
}

const generateResponseOptions = (res, methods) => {
    const methodsString = methods.join(', ');
    const responseConfig = new ResponseConfig(
        res, 204,
        {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : methodsString,
            'Access-Control-Allow-Headers' : 'Content-Type, Authorization',
            'Access-Control-Max-Age': '86400'
        },
        ''
    );

    generateResponse(responseConfig);
}

const generateResponseHTML = (res, body) => {
    const responseConfig = new ResponseConfig(
        res, 200,
        {
            'Content-Type' : CONTENT_TYPES['.html']
        },
        body
    );

    generateResponse(responseConfig);
}

const generateResponse = (responseConfig) => {
    if (!responseConfig.headers['Content-Type']) {
        responseConfig.headers['Content-Type'] = CONTENT_TYPES['.txt'];
    }

    responseConfig.response.writeHead(responseConfig.status, responseConfig.headers);
    responseConfig.response.write(responseConfig.body);
    responseConfig.response.end();
};

module.exports = {
    generateResponse,
    generateResponseNotFound,
    generateResponseMethodNotAllowed,
    generateResponseServerError,
    generateResponseDataNotFound,
    generateResponseValidationError,
    generateResponseDataFound,
    generateResponseDataCreated,
    generateResponseDataDeleted,
    generateResponseOptions,
    generateResponseDataUpdated,
    generateResponseHTML
}