

const webpack = require('webpack');
const path = require('path');

const config = require('./webpack.bmr.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

config.output = {
    // publicPath: '../../dist/',
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../../../dist'),
    devtoolModuleFilenameTemplate: 'appDashboard:///[resourcePath]?[hash]'
};

config.plugins.push(
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
