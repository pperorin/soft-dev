const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const MovingServices = require('../../models/jobCategoriesModel/movingServicesModel');

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

exports.getAllMovingServicesUser = catchAsync(async (req, res, next) => {

    const features = new APIFeatures(MovingServices.find(), req.query)
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

exports.getMovingServicesUser = catchAsync(async (req, res, next) => {

    const user = await MovingServices.find({ id: req.params.id });

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

exports.createMovingServicesUser = catchAsync(async (req, res, next) => {
    req.body.id = req.params.id;
    const duplicate = await MovingServices.find({ id: req.body.id })
    for (let i = 0; i < duplicate.length; i++) {
        if (req.body.subCategories == duplicate[i].subCategories) {
            return next(new AppError('Duplicate SubCategories', 404))
        }
    }
    const user = await User.findById(req.params.id);
    req.body.firstname = user.firstname;
    req.body.lastname = user.lastname;

    const newMovingServicesUser = await MovingServices.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            User: newMovingServicesUser
        }
    });
});