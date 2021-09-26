const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const Handyman = require('../../models/jobCategoriesModel/handymanModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '3';
    req.query.sort = 'firstname,lastname';
    req.query.fields = 'firstname,lastname';
    next();
};

exports.getUserID = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};

exports.getAllHandymanUser = catchAsync(async (req, res, next) => {

    const features = new APIFeatures(Handyman.find(), req.query)
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

exports.getHandymanUser = catchAsync(async (req, res, next) => {

    const user = await Handyman.find({ id: req.params.id });

    if (!user) {
        return next(new AppError('No user found with thai ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});

exports.createHandymanUser = catchAsync(async (req, res, next) => {
    req.body.id = req.params.id;
    console.log(req.body)

    const newHandymanUser = await Handyman.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            User: newHandymanUser
        }
    });
});