const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Cleaning = require('../models/jobCategoriesModel/cleaningModel');
const Consultant = require('../models/jobCategoriesModel/consultantModel');
const Handyman = require('../models/jobCategoriesModel/handymanModel');
const Mounting = require('../models/jobCategoriesModel/mountingModel');
const MovingServices = require('../models/jobCategoriesModel/movingServicesModel');
const PersonalAssistant = require('../models/jobCategoriesModel/personalAssistantModel');
const VisualAudio = require('../models/jobCategoriesModel/visualAudioModel');
const Yardwork = require('../models/jobCategoriesModel/yardworkModel');

exports.createReviewCleaning = catchAsync(async (req, res, next) => {
    const tasker = await Cleaning.findOne({ user: req.params.id });
    if (tasker.user._id == req.user.id)
        return next(new AppError('user and tasker are the same person', 400));
    const newScore = ((tasker.ratingsQuantity * tasker.ratingsAverage) + req.body.reviewRating) / (tasker.ratingsQuantity + 1);
    const newQuantity = tasker.ratingsQuantity + 1;
    const bodyReview = { userReview: req.user.id, review: req.body.review };
    const review = await Cleaning.findOneAndUpdate(
        { user: req.params.id }, { ratingsAverage: newScore, ratingsQuantity: newQuantity, $push: { review: bodyReview }, }, { new: true })

    res.status(200).json({
        status: 'success',
        data: {
            review
        }
    });
});