const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './public/portfolio/index.js'],
    output: {
        path: path.resolve(__dirname, './public/static/portfolio/bundles'),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        port: 3200,
        static: {
            directory: path.join(__dirname, 'public'),
        }
    }
};
