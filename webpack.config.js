const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'webpack.bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
            test : /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
            }
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],

    mode: 'production'
};




