// webpack.config.js
'use strict';
const webpack = require('webpack');
const path = require('path');
// Constant with our paths
const paths = {
    ASSETS: path.resolve(__dirname, ''),
    JS: path.resolve(__dirname, 'js'),
    DIST: path.resolve(__dirname, '../dist'),
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const babelLoader = require('babel-loader');

module.exports = {
    context: __dirname,
    devtool: 'inline-sourcemap',
    entry: {
        init: path.join(paths.JS, 'script.js'),
    },
    devServer: {
       headers: { 'Access-Control-Allow-Origin': '*' }
    },
    resolve: {
        modules: [path.resolve(__dirname), 'node_modules'],
    },
    output: {
        path: paths.DIST,
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
                }),
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        // loader: 'jshint-loader',
                        // options: {
                        //     esversion: 6,
                        //     multistr: true,
                        // },
                    }
                ]
            },
        ],
    },
    plugins: [
        // new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jQuery',
            'windows.jQuery': 'jquery',
        }),
        // new CopyWebpackPlugin([

        //     // {output}/to/file.txt
        //     // {output}/to/directory/file.txt
        //     { from: './index.html', to: './index.html' },
        // ]),

        new HtmlWebpackPlugin({
          template: path.join(paths.ASSETS, 'index.html'),
        }),
        // TODO export AND link the css file correctly
        new ExtractTextPlugin({
            filename: path.join(paths.DIST, 'css/style.min.css'),
        }),
    ]
};
