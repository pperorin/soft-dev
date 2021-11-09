const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Contract = require('../models/contractModel');

exports.createContract = catchAsync(async (req, res, next) => {
    req.body.tasker = req.user.id;

    const contract = await Contract.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.getAllContract = catchAsync(async (req, res, next) => {
    const contract = await Contract.find();
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.getMyContract = catchAsync(async (req, res, next) => {
    const contract = await Contract.find({ tasker: req.user.id, user: req.user.id });
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});