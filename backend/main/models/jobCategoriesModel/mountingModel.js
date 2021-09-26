const mongoose = require('mongoose');
const Schema = mongoose.Schema

const mountingSchema = new Schema({
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
        enum: ['TV Mounting', 'Hanging Curtains & Installing Blinds', 'Mounting solar', 'Door & Window Installation', 'Light Installation']
    }
})


const MountingModel = mongoose.model('Mounting', mountingSchema)

module.exports = MountingModel