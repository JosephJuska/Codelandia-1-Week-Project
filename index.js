const http = require('http');
const dotenv = require('dotenv');
const mainRouter = require('./router/mainRouter');
const staticMiddleware = require('./middleware/staticMiddleware');
const logMiddleware = require('./middleware/logMiddleware');

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
    staticMiddleware(req, res, mainRouter);
    await logMiddleware(req);
});

server.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});