const io = require('socket.io')
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Chat = require('../models/chatModel');
const User = require('../models/userModel');


exports.getChat = catchAsync(async (req, res, next) => {
    let chatMessage = new Chat({ message: 'test-message', sender: req.user.id, receiver: req.params.id });
    // console.log(chatMessage);

    res.status(201).json({
        status: 'success',
        // data: {
        //     chatMessage
        // }
    });
});

exports.getAllChat = catchAsync(async (req, res, next) => {
    const allchat = await Chat.find();

    res.status(200).json({
        status: "success",
        data: {
            allchat
        }
    });
});