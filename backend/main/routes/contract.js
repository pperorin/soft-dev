const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const contractController = require('../controllers/contractController');

router.use(authController.isLoggedIn);


router
    .route('/')
    .get(contractController.getMyAllContracts);

router
    .route('/:id')
    .get(contractController.getContract)
    .patch(contractController.updateContract)
    .delete(contractController.deleteContract);

// router
//     .route('/cleanings/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/consultants/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/handymen/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/mountings/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/movingServices/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/personalAssistants/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/visualAudios/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

// router
//     .route('/yardworks/:id')
//     .post(authController.isLoggedIn, contractController.createContract);

module.exports = router