'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: '[name]-[hash].js',
    publicPath: ''
    // publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new DashboardPlugin(),
    // new ExtractTextPlugin('style.css'),
    new HtmlPlugin({
      title: 'Github app',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    preLoaders: [{
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
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ['style', 'css?modules']
        // loaders: ['style','raw']
      }
    ]
  }
})
