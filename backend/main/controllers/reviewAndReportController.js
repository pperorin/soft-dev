const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Review = require('../models/reviewModel')
const Report = require('../models/reportModel')
const Cleaning = require('../../models/jobCategoriesModel/cleaningModel');
const Consultant = require('../../models/jobCategoriesModel/consultantModel');
const Handyman = require('../../models/jobCategoriesModel/handymanModel');
const Mounting = require('../../models/jobCategoriesModel/mountingModel');
const MovingServices = require('../../models/jobCategoriesModel/movingServicesModel');
const PersonalAssistant = require('../../models/jobCategoriesModel/personalAssistantModel');
const VisualAudio = require('../../models/jobCategoriesModel/visualAudioModel');
const Yardwork = require('../../models/jobCategoriesModel/yardworkModel');

exports.reviewTasker = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    });
});

exports.reportTasker = catchAsync(async (req, res, next) => {


    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    });
});