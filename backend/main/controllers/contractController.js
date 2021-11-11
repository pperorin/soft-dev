const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Contract = require('../models/contractModel');
const Chat = require('../models/chatModel');

exports.createContract = catchAsync(async (req, res, next) => {

    // the contract must create by the tasker
    const chat = Chat.findById(req.params.id)
    if (chat.tasker.toString() !== req.user.id) {
        return next(new AppError('You are not authorized to create contract for this chat', 401));
    }

    req.body.tasker = chat.tasker;
    req.body.user = chat.user;
    const contract = await Contract.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.getMyAllContracts = catchAsync(async (req, res, next) => {
    const contractActive = await Contract.find({ tasker: req.user.id, user: req.user.id, status: 'active' });
    const contractFinish = await Contract.find({ tasker: req.user.id, user: req.user.id, status: 'finish' });
    res.status(200).json({
        status: 'success',
        data: {
            contractActive,
            contractFinish
        }
    });
});

exports.getContract = catchAsync(async (req, res, next) => {
    const contract = await Contract.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.updateContract = catchAsync(async (req, res, next) => {

    const contract = await Contract.findOneAndUpdate({ tasker: req.user.id, Active: "active" }, req.body, { new: true, runValidators: true });
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});

exports.deleteContract = catchAsync(async (req, res, next) => {
    const contract = await Contract.findByIdAndUpdate(req.params.id, { status: 'cancel' }, { new: true });
    res.status(200).json({
        status: 'success',
        data: {
            contract
        }
    });
});