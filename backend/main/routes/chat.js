const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController');
const chatController = require('../controllers/chatController');
const viewController = require('../controllers/viewsController');

router.use(authController.protect, authController.isLoggedIn);

router
    .route('/')
    .get(chatController.getAllChat)
    .post(chatController.createChat)
    .patch(chatController.sendMessage);

// .get(viewController.getChat, chatController.getAllChat);
// .get(viewController.getChat);

module.exports = router