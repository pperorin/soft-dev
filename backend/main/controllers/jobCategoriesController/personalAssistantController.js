const APIFeatures = require('./../../utils/apiFeatures');
const catchAsync = require('./../../utils/catchAsync');
const AppError = require('./../../utils/appError');
const PersonalAssistant = require('../../models/jobCategoriesModel/personalAssistantModel');

exports.aliasTopTasker = (req, res, next) => {
    req.query.limit = '1';
    req.query.sort = 'reviewtScore';
    req.query.fields = 'firstname', 'lastname';
    next();
};

exports.getUserID = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};

exports.getAllPersonalAssistantUser = catchAsync(async (req, res, next) => {

    const features = new APIFeatures(PersonalAssistant.find(), req.query)
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

exports.getPersonalAssistantUser = catchAsync(async (req, res, next) => {

    const user = await PersonalAssistant.find({ id: req.params.id });

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

exports.createPersonalAssistantUser = catchAsync(async (req, res, next) => {
    req.body.id = req.params.id;
    console.log(req.body)

    const newPersonalAssistantUser = await PersonalAssistant.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            User: newPersonalAssistantUser
        }
    });
});