var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
var app = express();

require('./db');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
var indexRouter = require('./routes/index')
// var userRouter = require('./routes/user')
// var adminRouter = require('./routes/admin')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(morgan('dev'));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour'
});
app.use('api', limiter);

// Set security HTTP headers
app.use(helmet())


//Body parser, reading data from bodt into req.body
app.use(express.json({ limit: '10kb' }))

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp(
  //  whitelist:['score','']
));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.options("*", cors());



app.use('/', indexRouter);
// app.use('/user', cors(), userRouter);
// app.use('/admin', cors(), adminRouter);



// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  // console.log(req.headers);
  next();
})

// error handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
