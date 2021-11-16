const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const taskerController = require('../controllers/taskerController');

// router.use(authController.isLoggedIn);

router
    .route('/')
    // .get(viewController.aliasTopTasker, viewController.getindex);
    .get(taskerController.getindex);

module.exports = router