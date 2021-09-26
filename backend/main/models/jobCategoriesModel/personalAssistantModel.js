const mongoose = require('mongoose');
const Schema = mongoose.Schema

const personalAssistantSchema = new Schema({
    _id: String,
    reviewtScore: {
        type: Number,
        default: '0'
    },
    description: String,
    history: [String],
    reviewByCustomer: [String],
    province: {
        type: String,
        required: [true, 'Please provide your province']
    },
    subCategories: {
        type: String
    }
})


const PersonalAssistantModel = mongoose.model('PersonalAssistant', personalAssistantSchema)

module.exports = PersonalAssistant