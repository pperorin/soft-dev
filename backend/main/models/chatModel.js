const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const chatSchema = new Schema(
    {
        message: {
            type: [
                {
                    sender: String,
                    message: String,
                },
            ], //-ชื่อ -ข้อความ
            default: [],
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Chat must belong to a sender.'],
        },
        tasker: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Chat must belong to a receiver'],
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

chatSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'firstname',
    }).populate({
        path: 'tasker',
        select: 'firstname',
    });

    // this.populate({
    //   path: 'user',
    //   select: 'name photo'
    // });
    next();
});

const ChatModel = mongoose.model('Chat', chatSchema);
module.exports = ChatModel;
