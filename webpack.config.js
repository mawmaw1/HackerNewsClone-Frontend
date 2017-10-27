const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};

const appJsPath = path.join(paths.JS, 'app.js');

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    [
                        'style-loader', 'sass-loader'
                    ]
                ),
            }
        ],
        // loaders: [
        //     {
        //         test: /\.scss$/,
        //         loaders: [ 'style-loader']
        //     }
        // ]
    },
    resolve: {
        extensions: ['.js']
    }
};