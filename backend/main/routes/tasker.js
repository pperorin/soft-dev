const express = require('express')
const router = express.Router()
const cleaningController = require('./../controllers/jobCategoriesController/cleaningController');
const consultantController = require('./../controllers/jobCategoriesController/consultantController');
// Cleaning
router
    .route('/cleaning')
    .get(cleaningController.getAllCleaningUser)
    .post(cleaningController.getUserID, cleaningController.createCleaningUser);
router
    .route('/cleaning/Me')
    .get(cleaningController.getUserID, cleaningController.getCleaningUser);

// Consultant
router
    .route('/consultant')
    .get(consultantController.getAllConsultantUser)
    .post(consultantController.getUserID, consultantController.createConsultantUser);
router
    .route('/consultant/Me')
    .get(consultantController.getUserID, consultantController.getConsultantUser);

module.exports = router

