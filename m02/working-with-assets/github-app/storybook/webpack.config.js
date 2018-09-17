'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

// module.exports = {
//   module: {
//     preLoaders: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       include: /src/,
//       loader: 'standard'
//     }],

//     loaders:[{
//       test: /\.css$/,
//       exclude: /node_modules/,
//       // include: /src/,
//       // loaders: ['style', 'css?modules&localIdentName=[local]']
//       loaders: ['style', 'css?modules&localIdentName=[path][name]__[local]--[hash:base64:15]']
//       // loaders: ['style','raw']
//     }]

//   }
// }


module.exports = function (config. env) {
  const newConfig = webpackConfig(config, env)

  newConfig.mobule.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard'
  })
  return newConfig
}
