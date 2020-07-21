const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=__webpack_hmr'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    'app': [hotMiddlewareScript, './src/app.js']
  },
  output: {
    hotUpdateChunkFilename: 'update.js',
    hotUpdateMainFilename: 'update.json'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'css-hot-loader',
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: "pre"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, '../dist/views')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
    // new BundleAnalyzerPlugin()
  ]
})
