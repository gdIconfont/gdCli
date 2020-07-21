const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compression = require('compression')
const ejs = require('ejs')
const session = require('express-session')
const router = require('./routes/com')
const appConfig = require('./app.config.js')
/* var RedisStore = require('connect-redis')(session)
const redis = require('redis')
let client = redis.createClient({
  host:'10.0.114.11',
  port:'6379',
  db:1,
  ttl: 60 * 60 * 6, //Session的有效期为6h
  logErrors : true,
  password:'everbright'
}) */

const app = express()
// 启动gzip压缩
app.use(compression())

const webpack = require("webpack")
const webpackConfig = require('./build/webpack.dev.conf')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}))
app.use(webpackHotMiddleware(compiler))

// view engine setup
app.set('views', path.join(__dirname, 'dist/views'))
app.engine('html', ejs.__express)
app.set('view engine', 'html')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({ extended: false, limit:'10mb'}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(session({
  secret: '9208',
  name: 'yuejuanScan_mobile' + appConfig.poxcyPath.replace(/\//g, '_'), // 这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {
    // maxAge: 24*60*60*1000 
  }, // 设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  rolling: true,
  resave: false,
  saveUninitialized: true,
  /* store: new RedisStore({
    client: client
  }) */
}));

app.use(router)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
