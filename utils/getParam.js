const getParam = (url) => {
    const splittedURL = url.split('/');
    return splittedURL.slice(2).join('/');
};

module.exports = getParam;