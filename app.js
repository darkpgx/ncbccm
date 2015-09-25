var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var generalRouter = require('./server/routes/general');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(expressLayouts);
app.use(bodyParser.json({limit: '100mb', parameterLimit: 9000000}));
app.use(bodyParser.urlencoded({ limit:'100mb', extended: false, parameterLimit: 9000000 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', generalRouter);

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
