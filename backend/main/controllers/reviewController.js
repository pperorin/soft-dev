const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Review = require('../models/reviewModel')
const Report = require('../models/reportModel')
const Cleaning = require('../models/jobCategoriesModel/cleaningModel');
const Consultant = require('../models/jobCategoriesModel/consultantModel');
const Handyman = require('../models/jobCategoriesModel/handymanModel');
const Mounting = require('../models/jobCategoriesModel/mountingModel');
const MovingServices = require('../models/jobCategoriesModel/movingServicesModel');
const PersonalAssistant = require('../models/jobCategoriesModel/personalAssistantModel');
const VisualAudio = require('../models/jobCategoriesModel/visualAudioModel');
const Yardwork = require('../models/jobCategoriesModel/yardworkModel');

exports.setTourUserIds = (req, res, next) => {
    // Allow nested routes
    if (!req.body.tour) req.body.tour = req.params.tourId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
};

// exports.getAllReviews = factory.getAll(Review);
// exports.getReview = factory.getOne(Review);
// exports.createReview = factory.createOne(Review);
// exports.updateReview = factory.updateOne(Review);
// exports.deleteReview = factory.deleteOne(Review);

// exports.createReview = catchAsync(async (req, res, next) => {
//     const newReview = await Review.create(req.body);

//     res.status(200).json({
//         status: 'success',
//         data: {
//             review: newReview
//         }
//     });
// });

// exports.getAllReview = catchAsync(async (req, res, next) => {
//     const reviews = await Review.find()

//     res.status(200).json({
//         status: 'success',
//         data: {
//             reviews
//         }
//     });
// });

// exports.reportTasker = catchAsync(async (req, res, next) => {


//     res.status(200).json({
//         status: 'success',
//         data: {
//             user: updatedUser
//         }
//     });
// });