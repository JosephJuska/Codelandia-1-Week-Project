const { METHODS } = require("../utils/constants");
const { generateMethodNotAllowed, generateResponseHTML } = require("../utils/generateResponse");
const adminService = require('../service/adminService');
const portfolioService = require('../service/portfolioService');

const mainController = (req, res) => {
    const {method} = req;
    switch(method){
        case METHODS.GET:
            getDefault(res);
            break;

        default:
            generateMethodNotAllowed(res);
    }
};

const getDefault = (res) => {
    const portfolio = portfolioService.getPortfolio();
    const indexEJS = adminService.getEJS('pages/index.ejs');

    const renderedIndexEJS = adminService.renderEJS(indexEJS, {
        styleSheets: [
            'https://fonts.googleapis.com/css?family=Roboto:400,500,700',
            '/index/assets/bootstrap/css/bootstrap.min.css',
            '/index/assets/font-awesome/css/fontawesome-all.min.css',
            '/index/assets/css/magnific-popup.css',
            '/index/assets/css/odometer-theme-default.css',
            '/index/assets/css/owl.carousel.min.css',
            '/index/assets/css/style.css',
        ],

        portfolio: portfolio,
        scripts: [
            '/index/assets/js/custom.hero.js',
            '/index/assets/js/jquery-3.3.1.min.js',
            '/index/assets/js/popper.min.js',
            '/index/assets/bootstrap/js/bootstrap.min.js',
            '/index/assets/js/imagesloaded.pkgd.min.js',
            '/index/assets/js/isInViewport.jquery.js',
            '/index/assets/js/jquery.magnific-popup.min.js',
            '/index/assets/js/scrolla.jquery.min.js',
            '/index/assets/js/jquery.validate.min.js',
            '/index/assets/js/jquery-validate.bootstrap-tooltip.min.js',
            '/index/assets/js/odometer.min.js',
            '/index/assets/js/owl.carousel.min.js',
            '/index/assets/js/custom.js',
            '/index/bundles/bundle.js'
        ]
    });

    generateResponseHTML(res, renderedIndexEJS);
};

module.exports = mainController;