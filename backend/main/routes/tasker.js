const express = require('express')
const router = express.Router()
const cleaningController = require('./../controllers/jobCategoriesController/cleaningController');
const consultantController = require('./../controllers/jobCategoriesController/consultantController');
const handymanController = require('./../controllers/jobCategoriesController/handymanController');
const mountingController = require('./../controllers/jobCategoriesController/mountingController');
const movingServicesController = require('./../controllers/jobCategoriesController/movingServicesController');
const personalAssistantController = require('./../controllers/jobCategoriesController/personalAssistantController');
const visualAudioController = require('./../controllers/jobCategoriesController/visualAudioController');
const yardworkController = require('./../controllers/jobCategoriesController/yardworkController');

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

// Handyman
router
    .route('/handyman')
    .get(handymanController.getAllHandymanUser)
    .post(handymanController.getUserID, handymanController.createHandymanUser);
router
    .route('/handyman/Me')
    .get(handymanController.getUserID, handymanController.getHandymanUser);

// Mounting
router
    .route('/mounting')
    .get(mountingController.getAllMountingUser)
    .post(mountingController.getUserID, mountingController.createMountingUser);
router
    .route('/mounting/Me')
    .get(mountingController.getUserID, mountingController.getMountingUser);

// MovingServices
router
    .route('/movingServices')
    .get(movingServicesController.getAllMovingServicesUser)
    .post(movingServicesController.getUserID, movingServicesController.createMovingServicesUser);
router
    .route('/movingServices/Me')
    .get(movingServicesController.getUserID, movingServicesController.getMovingServicesUser);

// PersonalAssistant
router
    .route('/personalAssistant')
    .get(personalAssistantController.getAllPersonalAssistantUser)
    .post(personalAssistantController.getUserID, personalAssistantController.createPersonalAssistantUser);
router
    .route('/personalAssistant/Me')
    .get(personalAssistantController.getUserID, personalAssistantController.getPersonalAssistantUser);

// VisualAudio
router
    .route('/visualAudio')
    .get(visualAudioController.getAllVisualAudioUser)
    .post(visualAudioController.getUserID, visualAudioController.createVisualAudioUser);
router
    .route('/visualAudio/Me')
    .get(visualAudioController.getUserID, visualAudioController.getVisualAudioUser);

// VisualAudio
router
    .route('/yardwork')
    .get(yardworkController.getAllYardworkUser)
    .post(yardworkController.getUserID, yardworkController.createYardworkUser);
router
    .route('/yardwork/Me')
    .get(yardworkController.getUserID, yardworkController.getYardworkUser);

module.exports = router

