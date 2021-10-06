const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const User = require('../../models/userModel');
const Consultant = require('../../models/jobCategoriesModel/consultantModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '7';
    req.query.sort = 'reviewtScore';
    req.query.fields = 'id,firstname,lastname,reviewScore,description,province,subCategories';
    next();
};

exports.getUserID = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};

exports.getAllConsultantUser = catchAsync(async (req, res, next) => {

    const features = new APIFeatures(Consultant.find(), req.query)
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

exports.getConsultantUser = catchAsync(async (req, res, next) => {

    const user = await Consultant.find({ id: req.params.id });

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

exports.createConsultantUser = catchAsync(async (req, res, next) => {
    req.body.id = req.params.id;
    const duplicate = await Consultant.find({ id: req.body.id })
    if (duplicate.length > 0)
        return next(new AppError('Duplicate User', 404))

    const user = await User.findById(req.params.id);
    req.body.firstname = user.firstname;
    req.body.lastname = user.lastname;

    const newConsultantUser = await Consultant.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            User: newConsultantUser
        }
    });
});