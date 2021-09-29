const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contractSchema = new Schema({
    idTasker: {
        type: Schema.ObjectId
    },
    idUser: {
        type: Schema.ObjectId
    },
    Description: {
        type: String,
        require: true
    },
    ActiveAt: {
        type: Date
    }
})


const ContractModel = mongoose.model('Contract', contractSchema)

module.exports = ContractModel