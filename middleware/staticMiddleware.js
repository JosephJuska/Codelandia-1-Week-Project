const fs = require('fs');
const getRootPath = require('../utils/getRootPath');
const ResponseConfig = require('../utils/responseConfig');
const { CONTENT_TYPES } = require('../utils/constants');
const { generateResponse } = require('../utils/generateResponse');

const staticPath = getRootPath() + 'public/static';

const staticMiddleware = (req, res, next) => {
    const {url} = req;
    try{
        const data = fs.readFileSync(staticPath + url);
        const extension = '.' + url.split('.').pop();
        const responseConfig = new ResponseConfig(
            res, 200,
            {
                'Content-Type': CONTENT_TYPES?.[extension] ? CONTENT_TYPES[extension] : 'application/application/octet-stream'
            },
            data
        );

        return generateResponse(responseConfig);
        
    }catch(error){
        next(req, res);
    }
}

module.exports = staticMiddleware;