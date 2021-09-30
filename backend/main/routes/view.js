const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
// const cleaningController = require('../controllers/jobCategoriesController/cleaningController');
// const consultantController = require('../controllers/jobCategoriesController/consultantController');
// const handymanController = require('../controllers/jobCategoriesController/handymanController');
// const mountingController = require('../controllers/jobCategoriesController/mountingController');
// const movingServicesController = require('../controllers/jobCategoriesController/movingServicesController');
// const personalAssistantController = require('../controllers/jobCategoriesController/personalAssistantController');
// const visualAudioController = require('../controllers/jobCategoriesController/visualAudioController');
// const yardworkController = require('../controllers/jobCategoriesController/yardworkController');

router.use(authController.isLoggedIn);

router
    .route('/')
    .get(userController.getAllUsers)

module.exports = router