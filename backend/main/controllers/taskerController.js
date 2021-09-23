const User = require('../models/userModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '3';
    req.query.sort = 'firstname,lastname';
    req.query.fields = 'firstname,lastname';
    next();
};

exports.getAllUsers = catchAsync(async (req, res, next) => {

    // EXECUTE QUERY
    const features = new APIFeatures(User.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();    //page='int'&limit='int'

    // SEND RESPONSE
    const users = await features.query;
    res.status(200).json({
        status: 'success',
        result: users.length,
        data: {
            users
        }
    });
});