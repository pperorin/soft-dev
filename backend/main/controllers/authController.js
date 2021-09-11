const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

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