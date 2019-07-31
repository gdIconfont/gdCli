const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=__webpack_hmr'

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    'app': [hotMiddlewareScript, './src/app.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, '../views/dist')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
