const ExtractTextPlugin     = require("extract-text-webpack-plugin");
const path                  = require('path');
module.exports = {
    entry:{
        base           : './src/site.js',
    },
    output: {
        path: path.resolve(__dirname,'assets'),
        filename: 'js/[name].js',
        publicPath: ''
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader'])
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
    ]
}