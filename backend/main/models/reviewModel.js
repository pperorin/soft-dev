const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contractSchema = new Schema({
    idTasker: {
        type: Schema.ObjectId
    },
    idUser: {
        type: Schema.ObjectId
    },
    reviewScore: {
        type: Number,
        require: true,
        enum: [1, 2, 3, 4, 5]
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