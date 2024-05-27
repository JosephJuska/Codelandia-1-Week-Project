const { generateResponseNotFound } = require("../utils/generateResponse");

class Router {
    constructor() {
        this.routes = {};
    }

    addRoute(path, callback, hasParam = false) {
        this.routes[path] = {callback, hasParam};
    }

    checkRoute(req, res) {
        const { url } = req;
        let newURL;
        let splittedUrl;

        if(url !== '/' && url.endsWith('/')) newURL = url.slice(0, -1);
        else newURL = url;
        
        splittedUrl = newURL;
        if (this._hasParam(newURL)){
            splittedUrl = this._getParamPath(newURL);
        }

        const route = this.routes[splittedUrl];
        
        if (!route) return generateResponseNotFound(res);

        const { callback, hasParam } = route;
        const param = hasParam ? this._getParam(newURL) : null;
        callback(req, res, param);
    }

    _hasParam(url) {
        const lastPart = parseInt(url.split('/').pop());
        return Number.isInteger(lastPart);
    }

    _getParamPath(url) {
        const splittedUrl = url.split('/');
        splittedUrl.pop();
        return splittedUrl.join('/').startsWith('/') ? `${splittedUrl.join('/')}` : `/${splittedUrl.join('/')}`;
    }

    _getParam(url) {
        if(!Number.isInteger(parseInt(url.split('/').pop()))) return null;
        return Number(url.split('/').pop());
    }
}

module.exports = Router;