const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    const token = jwt.sign({ id: newUser._id }, 'secret', {
        expiresIn: '1d'
    });

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    // const user = await User.findOne({ email }).select('+password');

    // if (!user || !(await user.correctPassword(password, user.password))) {
    //   return next(new AppError('Incorrect email or password', 401));
    // }

    // 3) If everything ok, send token to client
    const token = ''
    res.status(200).json({
        status: 'success',
        token
    })
    // createSendToken(user, 200, res);
});