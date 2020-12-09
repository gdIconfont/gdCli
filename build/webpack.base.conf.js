const path = require('path')
const os = require('os')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const HappyPack = require('happypack')
const appConfig = require('../app.config.js')
// const TransformModulesPlugin = require('webpack-transform-modules-plugin')

const rootPath = process.cwd()
let happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
let outputPath = path.resolve(rootPath, './dist/static/')

function copyFile (param) {
  const sourceFile = path.resolve(param.sourcePath, param.fileName)
  const destFile = path.resolve(param.destPath, param.fileName)
  const readStream = fs.createReadStream(sourceFile)
  const writeStream = fs.createWriteStream(destFile)
  readStream.pipe(writeStream)
}
copyFile({
  fileName: 'app.config.js',
  sourcePath: rootPath,
  destPath: path.resolve(rootPath, 'dist')
})

module.exports = {
  output: {
    path: outputPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: './static/'
  },
  externals: {
    /* 'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios' */
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'components': path.resolve(rootPath, './src/components'),
      '@': path.resolve('src'),
      'util': path.resolve(rootPath, './src/plugins/util'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    // mainFields: ['module', 'main']
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(rootPath, './src/'),
        exclude: path.resolve(rootPath, './src/plugins'),
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader',
        include: path.resolve(rootPath, './src/')
        /* options: {
          'presets': ['env', 'stage-3'],
          "plugins": ["transform-runtime"]
        } */
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxAsyncRequests: 1,
      minChunks: 3,
      cacheGroups: {
        libs: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          priority: 10
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin(),
		// new TransformModulesPlugin(),
    new HappyPack({
      loaders: [{
        path: 'babel-loader',
        options: {
          'cachedirectory': true,
          'presets': ['env', 'stage-3']
        }
      }],
      threadPool: happyThreadPool,
      // cache: true,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: '易阅卷',
      filename: path.resolve(rootPath, './dist/views/index.html'),
      template: 'views/index.html',
      chunksSortMode: 'auto',
      alwaysWriteToDisk: true,
      inject: true,
      // chunks: ['vendor', 'app'],
      minify: {
        removeComments: true, // 去掉注释
        minifyJS: true, // 压缩js
        minifyCSS: true, // 压缩css
        collapseWhitespace: true, // 去掉空格
        useShortDoctype: true,
        removeScriptTypeAttributes: true
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      //`runtime` must same as runtimeChunk name. default is `runtime`
      inline:['runtime~app.js']
    })
  ]
}