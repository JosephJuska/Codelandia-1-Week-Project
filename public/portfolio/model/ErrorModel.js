class ErrorModel{
    constructor(status, message, contentType='text'){
        this.status = status;
        this.message = message;
        this.contentType = contentType;
    }
}

module.exports = ErrorModel;