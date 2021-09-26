const mongoose = require('mongoose');
const Schema = mongoose.Schema

const consultantSchema = new Schema({
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
        type: String,
        enum: ['Marketing', 'Legal', 'Financial-planning', 'Horoscope', 'Tutoring', 'Feng-shui', 'Psychologist']
    }
})


const ConsultantModel = mongoose.model('Consultant', consultantSchema)

module.exports = ConsultantModel