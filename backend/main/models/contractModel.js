const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contractSchema = new Schema({
    tasker: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'The contract must have a tasker']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'The contract must have a user']
    },
    date: {
        type: Date,
        required: [true, 'The contract must have a date']
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    price: Number,
    category: {
        type: String,
        required: [true, 'The contract must have a category'],
        enum: ['cleanings', 'consultants', 'handymen', 'mountings', 'movingServices', 'personalAssistants', 'visualAudios', 'yardworks']
    },
    ActiveAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "active",
        enum: ["cancel", "active", "finish"]
    },
    is_review: {
        type: Boolean,
        default: false,
        enum: [true, false]
    }
})

contractSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'firstname',
    }).populate({
        path: 'tasker',
        select: 'firstname',
    });
    next();
});

const ContractModel = mongoose.model('Contract', contractSchema)
module.exports = ContractModel