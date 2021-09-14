var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const cors = require('cors');
var app = express();

require('./db');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
var indexRouter = require('./routes/index')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cors(), indexRouter)

const session = require('express-session');

app.use(
  session({
    secret: 'my_super_secret',
    resave: false,
    saveUninitialized: false
  })
)

// app.use((req, res, next) => {
//   req.requestTime = new Date().toString();
//   console.log(req.headers);

//   next();
// })

// error handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
