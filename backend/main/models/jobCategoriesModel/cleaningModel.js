const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cleaningSchema = new Schema({
    id: {
        type: Schema.ObjectId
    },
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
        require: true,
        enum: ['House Cleaning Services', 'Disinfecting Services', 'Laundry Help', 'Air Conditioning Cleaning Service']
    }
})

const CleaningModel = mongoose.model('Cleaning', cleaningSchema)

module.exports = CleaningModel