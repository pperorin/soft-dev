const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController');
const chatController = require('../controllers/chatController');

router
    .route('/')
    .get(userController.getMe, chatController.getChat);

module.exports = router