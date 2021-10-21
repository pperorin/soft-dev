const mongoose = require('mongoose');
const Schema = mongoose.Schema

const visualAudioSchema = new Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    reviewScore: {
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
        type: [String],
        require: true,
        //enum: ['Photography', 'Videography', 'Voice-over', 'Singer-band', 'Animations', 'Podcast', 'Subtitle', 'Sound Engineering', 'Makeup']
    }
})

visualAudioSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const VisualAudioModel = mongoose.model('VisualAudio', visualAudioSchema)
module.exports = VisualAudioModel