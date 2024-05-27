function bodyParser(req) {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const contentType = req.headers['content-type'];

            if (!body) {
                resolve({});
            } else if (contentType === 'application/json') {
                try {
                    resolve(JSON.parse(body));
                } catch (error) {
                    reject(new Error('Invalid JSON'));
                }
            } else if (contentType === 'application/x-www-form-urlencoded') {
                const parsedBody = {};
                const keyValuePairs = body.split('&');

                keyValuePairs.forEach((pair) => {
                    const [key, value] = pair.split('=');
                    parsedBody[decodeURIComponent(key)] = decodeURIComponent(value);
                });

                resolve(parsedBody);
            } else {
                resolve(body);
            }
        });

        req.on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = bodyParser;