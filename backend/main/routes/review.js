const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');

router.use(authController.isLoggedIn);

// router
//     .route('/')
//     // .get(viewController.aliasTopTasker, viewController.getindex);
//     .get(viewController.getindex);

module.exports = router