const adminController = require("../controller/adminController");
const adminCreateMessageController = require("../controller/adminCreateMessageController");
const adminMessageController = require("../controller/adminMessageController");
const adminPortfolioController = require("../controller/adminPortfolioController");
const mainController = require("../controller/mainController");
const { defaultMessagesController } = require("../controller/messagesController");
const { messagesPageController } = require("../controller/messagesPageController");
const portfolioController = require("../controller/portfolioController");
const urls = require('../utils/urls');
const Router = require("./router");

const mainRouter = new Router();

mainRouter.addRoute(urls.DEFAULT_URL, mainController);

mainRouter.addRoute(urls.MESSAGES_URL, defaultMessagesController, true);
mainRouter.addRoute(urls.MESSAGES_PAGE, messagesPageController, true);

mainRouter.addRoute(urls.PORTFOLIO_URL, portfolioController);

mainRouter.addRoute(urls.ADMIN_URL, adminController, true);
mainRouter.addRoute(urls.ADMIN_MESSAGE, adminMessageController, true);
mainRouter.addRoute(urls.ADMIN_PORTFOLIO, adminPortfolioController);
mainRouter.addRoute(urls.ADMIN_MESSAGE_CREATE, adminCreateMessageController);

module.exports = mainRouter.checkRoute.bind(mainRouter);