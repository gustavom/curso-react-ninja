'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

module.exports = validate({
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    output: { // define a saida do arquivo
        path: path.join(__dirname, 'dist'), // define o local de saida do arquiv
        filename: 'bundle.js', // define o nome do arquivo de saida
        publicPath : '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        preLoaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
});
