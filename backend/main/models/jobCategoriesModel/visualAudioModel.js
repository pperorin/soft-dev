const mongoose = require('mongoose');
const Schema = mongoose.Schema

const visualAudioSchema = new Schema({
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
        enum: ['Photography', 'Videography', 'Voice-over', 'Singer-band', 'Animations', 'Podcast', 'Subtitle', 'Sound Engineering', 'Makeup']
    }
})


const VisualAudioModel = mongoose.model('VisualAudio', visualAudioSchema)

module.exports = VisualAudioModel