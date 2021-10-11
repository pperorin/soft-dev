const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contractSchema = new Schema({
    tasker: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tasker',
        required: [true, 'Review must belong to a tasker.']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Review must belong to a user']
    },
    date: {
        type: Date,

    },
    location: {
        type: String
    },
    Description: {
        type: String
    },
    ActiveAt: {
        type: Date
    }
})


const ContractModel = mongoose.model('Contract', contractSchema)

module.exports = ContractModel