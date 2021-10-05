const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const Handyman = require('../../models/jobCategoriesModel/handymanModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '1';
    req.query.sort = 'reviewtScore';
    req.query.fields = 'subCategories', 'reviewtScore', 'description';
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
    const duplicate = await Handyman.find({ id: req.body.id })
    for (let i = 0; i < duplicate.length; i++) {
        if (req.body.subCategories == duplicate[i].subCategories) {
            return next(new AppError('Duplicate SubCategories', 404))
        }
    }
    const user = await User.findById(req.params.id);
    req.body.firstname = user.firstname;
    req.body.lastname = user.lastname;

    const newHandymanUser = await Handyman.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            User: newHandymanUser
        }
    });
});