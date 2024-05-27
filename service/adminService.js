const fs = require('fs');
const getRootPath = require('../utils/getRootPath');
const rootEJSPath = getRootPath() + '/views/';
const ejs = require('ejs');

const getEJS = (path) => {
    const result = fs.readFileSync(rootEJSPath + path, 'utf-8');
    return result;
};

const renderEJS = (template, params={}) => {
    const renderedData = ejs.render(template, params);
    return renderedData;
} 

module.exports = {
    getEJS,
    renderEJS,
}