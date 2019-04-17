var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
// for MongoDB connection 4

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin123@ds139946.mlab.com:39946/sum-finance');


var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
mongoose.set('useNewUrlParser', true);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {

  const origin = req.get('origin');

  res.header('Access-Control-Allow-Origin', "*");

  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');

  res.header('Access-Control-Allow-Methods', true);

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, x-auth');
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/finance', require('./routes/finance'));
app.use('/item', require('./routes/Item'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//connecting to MongoDB 
mongoose.connect('mongodb://admin:admin123@ds139946.mlab.com:39946/sum-finance');
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;