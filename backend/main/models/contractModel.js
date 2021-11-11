const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contractSchema = new Schema({
    tasker: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tasker',
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
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
    ActiveAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "active",
        enum: ["cancel", "active", "finish"]
    }
})

const ContractModel = mongoose.model('Contract', contractSchema)
module.exports = ContractModel