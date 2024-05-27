const getCurrentTime = require("../utils/getCurrentTime");

class RequestLogModel {
    constructor(url, method, headers, body) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
        this.time = getCurrentTime();
    }

    toString() {
        const headersString = JSON.stringify(this.headers, null, 2);
        const bodyString = JSON.stringify(this.body, null, 2);

        return `
----------------------------------------------------------------
URL: ${this.url}
METHOD: ${this.method}
HEADERS: ${headersString}
BODY: ${bodyString}
TIME: ${this.time}
----------------------------------------------------------------
\n\n
        `;
    }
}

module.exports = RequestLogModel;
