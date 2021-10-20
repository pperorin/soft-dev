const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chatController');

const io = require("socket.io")(http);
const socket = io(http);

router
    .route('/')
    .get(socket.on("connection", (socket) => {
        console.log("user connected");
    }));

module.exports = router