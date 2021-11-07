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
    Description: {
        type: String
    },
    price: Number,
    ActiveAt: {
        type: Date,
        default: Date.now
    },
    Active: {
        type: String,
        default: "active",
        enum: ["cancelled", "active", "finished"]
    }
})

const ContractModel = mongoose.model('Contract', contractSchema)

module.exports = ContractModel