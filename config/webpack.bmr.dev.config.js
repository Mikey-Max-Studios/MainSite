
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.bmr.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

config.output = {
    // publicPath: '../../dist/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../../dev'),
    devtoolModuleFilenameTemplate: 'appDashboard:///[resourcePath]?[hash]'
};

config.plugins.concat([
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
        'process.env.COMPANY_UID': JSON.stringify('1'),
        'process.env.widgetURL': JSON.stringify('widget.beamery.local:3000'),
        'process.env.apiUrl': JSON.stringify('//beamery.local:9089'),
        'process.env.mailUrl': JSON.stringify('//mail.beamery.local:2501'),
        'process.env.appUrl': JSON.stringify('//app.beamery.local:9001/#'),
        'process.env.siteUrl': JSON.stringify('//beamery.local:9000/#!'),
        'process.env.pagesUrl': JSON.stringify('//pages.beamery.local:3000'),
        'process.env.notificationsApiUrl': JSON.stringify('//notify.beamery.local:8000'),
        'process.env.cookieName': JSON.stringify('sid_dev'),
        'process.env.xsrfCookieName': JSON.stringify('XSRF-BEAMERY-DEV'),
        'process.env.intercomKey': JSON.stringify('jxip5r9l'),
        'process.env.segmentKey': JSON.stringify('yMM2a81sExek4ZXp10WvifoOBRCRPI31'),
        'process.env.keenProject': JSON.stringify('54e8850696773d5bb7c726b3'),
        'process.env.keenReadKey': JSON.stringify('630c4975680c3934b34d3e461e82dedcc78b3284da68d94df4d51104cebb79fc61cc6a9a3fe9684145cf6833f38f667c7c30dbd0a6275921e6cf53a772c9018ae499299afdff2c498b6ae2cb9a143d59a40fc2f814cb8aae22a1232035a866121f87f9af35656f31d9c727bcb979c5a6'),
        'process.env.debugMode': JSON.stringify(true),
        'process.env.newRelicKey': JSON.stringify('19817455'),
        'process.env.froalaKey': JSON.stringify('NoknB-8tj1jC3yytyu=='),
        'process.env.filestackKey': JSON.stringify('AzfakPJi9Tu6GkB3xE9a0z')
    })
]);

module.exports = config;
