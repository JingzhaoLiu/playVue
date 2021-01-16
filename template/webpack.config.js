const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
    },
    devServer: {
        port: 9001,
        contentBase: 'www'
    }
}