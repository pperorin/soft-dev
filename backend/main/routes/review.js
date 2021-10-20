const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

router.use(authController.isLoggedIn);

router
    .route('/cleanings/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/consultants/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/handymen/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/mountings/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/movingServices/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/personalAssistants/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/visualAudios/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

router
    .route('/yardworks/:id')
    .get(reviewController.getAllReview)
    .post(authController.isLoggedIn, reviewController.createReview);

module.exports = router