const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contractSchema = new Schema({
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