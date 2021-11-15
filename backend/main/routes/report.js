const express = require('express')
const router = express.Router()

const authController = require('./../controllers/authController');
const reportController = require('../controllers/reportController')

// router.use(authController.protect, authController.isLoggedIn);

router
    .route('/')
    .get(reportController.getAllReport)

router
    .route('/:contractId')
    .get(reportController.getReport)
    .post(reportController.createReport);


module.exports = router