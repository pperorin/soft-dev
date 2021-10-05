const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const User = require('../models/userModel');
const Cleaning = require('../models/jobCategoriesModel/cleaningModel');
const Consultant = require('../models/jobCategoriesModel/consultantModel');
const Handyman = require('../models/jobCategoriesModel/handymanModel');
const Mounting = require('../models/jobCategoriesModel/mountingModel');
const MovingServices = require('../models/jobCategoriesModel/movingServicesModel');
const PersonalAssistant = require('../models/jobCategoriesModel/personalAssistantModel');
const VisualAudio = require('../models/jobCategoriesModel/visualAudioModel');
const Yardwork = require('../models/jobCategoriesModel/yardworkModel');

exports.indexPage = catchAsync(async (req, res, next) => {
    req.query.limit = '1';
    req.query.sort = 'reviewtScore';
    req.query.fields = 'firstname,lastname,reviewtScore,description';
    const topCleaning = new APIFeatures(Cleaning.find(), req.query).filter().sort().limitFields().paginate();
    const topConsultant = new APIFeatures(Consultant.find(), req.query).filter().sort().limitFields().paginate();
    const topHandyman = new APIFeatures(Handyman.find(), req.query).filter().sort().limitFields().paginate();
    const topMounting = new APIFeatures(Mounting.find(), req.query).filter().sort().limitFields().paginate();
    const topMovingServices = new APIFeatures(MovingServices.find(), req.query).filter().sort().limitFields().paginate();
    const topPersonalAssistant = new APIFeatures(PersonalAssistant.find(), req.query).filter().sort().limitFields().paginate();
    const topVisualAudio = new APIFeatures(VisualAudio.find(), req.query).filter().sort().limitFields().paginate();
    const topYardwork = new APIFeatures(Yardwork.find(), req.query).filter().sort().limitFields().paginate();

    // SEND RESPONSE
    const cleaning = await topCleaning.query;
    const consultant = await topConsultant.query;
    const handyman = await topHandyman.query;
    const mounting = await topMounting.query;
    const movingServices = await topMovingServices.query;
    const personalAssistant = await topPersonalAssistant.query;
    const visualAudio = await topVisualAudio.query;
    const yardwork = await topYardwork.query;


    res.status(200).json({
        status: 'success',
        data: {
            cleaning,
            consultant,
            handyman,
            mounting,
            movingServices,
            personalAssistant,
            visualAudio,
            yardwork
        }
    });
});