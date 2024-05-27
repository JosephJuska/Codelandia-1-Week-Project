const fs = require('fs');
const getRootPath = require('../utils/getRootPath');
const getCurrentDate = require('../utils/getCurrentDate');
const RequestLogModel = require('../model/RequestLogModel');
const bodyParser = require('../utils/bodyParser');

const logDir = getRootPath() + 'logs';

const staticMiddleware = async (req) => {
    const currentDate = getCurrentDate();
    const logFilePath = `${logDir}/${currentDate}.txt`;

    let requestBody;
    try{
        requestBody = await bodyParser(req);
    }catch(error){
        requestBody = {};
    }

    const request = new RequestLogModel(req.url, req.method, req.headers, requestBody);
    if(fs.existsSync(logFilePath)){
        fs.appendFileSync(logFilePath, request.toString());
    }else{
        fs.writeFileSync(logFilePath, request.toString());
    }
}

module.exports = staticMiddleware;