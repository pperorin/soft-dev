const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const contractController = require('../controllers/contractController');

router.use(authController.isLoggedIn);

router
    .route('/cleanings/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/consultants/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/handymen/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/mountings/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/movingServices/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/personalAssistants/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/visualAudios/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

router
    .route('/yardworks/:id')
    .get(contractController.getAllContract)
    .post(authController.isLoggedIn, contractController.createContract);

module.exports = router