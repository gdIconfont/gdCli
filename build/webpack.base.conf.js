const path = require('path')
const os = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HappyPack = require('happypack')
// const TransformModulesPlugin = require('webpack-transform-modules-plugin')

const rootPath = process.cwd()
let happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
let outputPath = path.resolve(rootPath, './static/dist/')
let publicPath = '/dist/'
module.exports = {
  output: {
    path: outputPath,
    filename: '[name].js',
    chunkFilename: `[name].js?v=${Math.random()}`,
    publicPath: publicPath
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
      'components': path.resolve(rootPath, './src/components')
    }
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(rootPath, './src/'),
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
        test: /\.css$/,
				// include: path.resolve(__dirname, '../src/'),
        use: [
					'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
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
      cacheGroups: {
        libs: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin(),
		// new TransformModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
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
      filename: '../../views/dist/index.html',
      template: 'views/index.html',
      chunksSortMode: 'auto',
      alwaysWriteToDisk: true,
      inject: true,
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
