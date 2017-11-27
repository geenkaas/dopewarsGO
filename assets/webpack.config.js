// webpack.config.js

'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'inline-sourcemap',

    entry: {
        main: './js/script.js',
    },

    devServer: {
       headers: { 'Access-Control-Allow-Origin': '*' }
    },

    resolve: {
        modules: [path.resolve(__dirname), 'node_modules'],
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'script.min.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader',
                query: {
                    name:'[name].[ext]',
                    outputPath:'images/',
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'jshint-loader'
                    }
                ]
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: "jQuery",
            "windows.jQuery": "jquery",
        }),
    ]
};
