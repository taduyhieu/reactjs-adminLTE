var path = require('path')
var HtmlWebpackPlugin

module.exports = {
    entry: './index.js,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
       rules: [
           {
               test: /\.(js)$/,
               use: 'babel-loader'
           }
       ]
    },
    plugins: [
        new HtmlWebpacklugin({
            template: './index.html'
        })
    ]
}