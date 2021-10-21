const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController');
const chatController = require('../controllers/chatController');
const viewController = require('../controllers/viewsController');

router.use(authController.protect, authController.isLoggedIn);

router
    .route('/')
    // .get(viewController.getChat, chatController.getChat);
    .get(viewController.getChat);

module.exports = router