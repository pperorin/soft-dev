const io = require('socket.io')
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Chat = require('../models/chatModel');
const User = require('../models/userModel');


exports.getChat = catchAsync(async (req, res, next) => {
    console.log(req.params.id);
    // const user = await User.findById(req.user);
    let chatMessage = new Chat({ message: 'test-message', sender: "sender" });
    // chatMessage.save();

    console.log(chatMessage);

    res.status(201).json({
        status: 'success',
        data: {
            chatMessage
        }
    });
});