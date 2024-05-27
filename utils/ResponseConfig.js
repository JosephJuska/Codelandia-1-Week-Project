class ResponseConfig{
    /**
     * 
     * @param {Object} res - Response object.  
     * @param {number} status - The status code of the response. 
     * @param {Object} headers - The headers for the response. 
     * @param {Object} body - THe body for the response. 
     */
    constructor(res, status, headers, body){
        this.response = res;
        this.status = status;
        this.headers = headers;
        this.body = body;
    }
}

module.exports = ResponseConfig;