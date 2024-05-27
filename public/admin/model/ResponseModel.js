class ResponseModel {
    constructor(success, error=null, data=null){
        this.success = success;
        this.error = error;
        this.data = data;
    }
} 

class ResponseSuccess extends ResponseModel {
    constructor(data=null){
        super(true, null, data);
    }
}

class ResponseError extends ResponseModel {
    constructor(error){
        super(false, error);
    }
}

module.exports = {
    ResponseSuccess,
    ResponseError
}