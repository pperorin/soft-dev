const express = require('express')
const router = express.Router({ mergeParams: true });
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

router.use(authController.protect);

// router
//     .route('/')
//     .get(reviewController.getAllReviews)
//     .post(
//         authController.restrictTo('user'),
//         reviewController.setTourUserIds,
//         reviewController.createReview
//     );

// router
//     .route('/:id')
//     .get(reviewController.getReview)
//     .patch(
//         authController.restrictTo('user', 'admin'),
//         reviewController.updateReview
//     )
//     .delete(
//         authController.restrictTo('user', 'admin'),
//         reviewController.deleteReview
//     );


// router
//     .route('/cleanings/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/consultants/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/handymen/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/mountings/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/movingServices/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/personalAssistants/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/visualAudios/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

// router
//     .route('/yardworks/:id')
//     .get(reviewController.getAllReview)
//     .post(authController.isLoggedIn, reviewController.createReview);

module.exports = router