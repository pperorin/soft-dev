const express = require('express')
const router = express.Router()
const authController = require('./../controllers/authController');
const cleaningController = require('./../controllers/jobCategoriesController/cleaningController');
const consultantController = require('./../controllers/jobCategoriesController/consultantController');
const handymanController = require('./../controllers/jobCategoriesController/handymanController');
const mountingController = require('./../controllers/jobCategoriesController/mountingController');
const movingServicesController = require('./../controllers/jobCategoriesController/movingServicesController');
const personalAssistantController = require('./../controllers/jobCategoriesController/personalAssistantController');
const visualAudioController = require('./../controllers/jobCategoriesController/visualAudioController');
const yardworkController = require('./../controllers/jobCategoriesController/yardworkController');

router.use(authController.protect);

// Cleaning
router
    .route('/cleanings')
    .get(cleaningController.aliasTopTasker, cleaningController.getAllCleaningUser)
    .post(cleaningController.getUserID, cleaningController.createCleaningUser);
router
    .route('/cleanings/:id')
    .get(cleaningController.getCleaningUser);

// Consultant
router
    .route('/consultants')
    .get(consultantController.getAllConsultantUser)
    .post(consultantController.getUserID, consultantController.createConsultantUser);
router
    .route('/consultants/:id')
    .get(consultantController.getConsultantUser);

// Handyman
router
    .route('/handymans')
    .get(handymanController.getAllHandymanUser)
    .post(handymanController.getUserID, handymanController.createHandymanUser);
router
    .route('/handymans/:id')
    .get(handymanController.getHandymanUser);

// Mounting
router
    .route('/mountings')
    .get(mountingController.getAllMountingUser)
    .post(mountingController.getUserID, mountingController.createMountingUser);
router
    .route('/mountings/:id')
    .get(mountingController.getMountingUser);

// MovingServices
router
    .route('/movingServices')
    .get(movingServicesController.getAllMovingServicesUser)
    .post(movingServicesController.getUserID, movingServicesController.createMovingServicesUser);
router
    .route('/movingServices/:id')
    .get(movingServicesController.getMovingServicesUser);

// PersonalAssistant
router
    .route('/personalAssistants')
    .get(personalAssistantController.getAllPersonalAssistantUser)
    .post(personalAssistantController.getUserID, personalAssistantController.createPersonalAssistantUser);
router
    .route('/personalAssistants/:id')
    .get(personalAssistantController.getPersonalAssistantUser);

// VisualAudio
router
    .route('/visualAudios')
    .get(visualAudioController.getAllVisualAudioUser)
    .post(visualAudioController.getUserID, visualAudioController.createVisualAudioUser);
router
    .route('/visualAudios/:id')
    .get(visualAudioController.getVisualAudioUser);

// VisualAudio
router
    .route('/yardworks')
    .get(yardworkController.getAllYardworkUser)
    .post(yardworkController.getUserID, yardworkController.createYardworkUser);
router
    .route('/yardworks/:id')
    .get(yardworkController.getYardworkUser);


module.exports = router

