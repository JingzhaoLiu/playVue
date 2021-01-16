const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath:'xu',
    },
    devServer:{
        port:9000,
        contentBase:'www'
    }
};