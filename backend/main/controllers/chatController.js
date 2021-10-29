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

    res.status(200).render('chat', {
        title: 'Chat',
        status: "success",
        allchat
    });
});

exports.createChat = catchAsync(async (req, res, next) => {
    const allchat = await Chat.findOne({ user: req.user.id, tasker: req.body.tasker });
    if (allchat) {
        return next(new AppError('duplicated chat room', 404))
    }

    const chat = await Chat.create(req.body);

    res.status(201).json({
        status: "success",
        data: {
            chat
        }
    });
});

exports.sendMessage = catchAsync(async (req, res, next) => {
    const newMessage = await Chat.findOneAndUpdate(
        { user: req.user.id, tasker: req.body.tasker },
        {
            $push: {
                message: {
                    sender: req.user.id,
                    message: req.body.message
                }
            }
        })
    res.status(201).json({
        status: "success",
        data: {
            newMessage
        }
    });
});
