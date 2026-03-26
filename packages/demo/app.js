var createError = require('http-errors');
var express = require('express');
const nunjucks = require('nunjucks');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const viewsPath = path.join(__dirname, 'views');

// cấu hình nunjucks
nunjucks.configure(viewsPath, {
  autoescape: true,
  // express: app,
  // watch: true // dev auto reload
});

// view engine setup
app.set('views', viewsPath);

app.engine('ejs', require('ejs').__express);
app.engine('jade', require('jade').__express);
app.engine('njk', require('nunjucks').render);

// app.set('view engine', 'ejs');
app.set('view engine', 'jade');
// app.set('view engine', 'njk');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
