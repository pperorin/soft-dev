const mongoose = require('mongoose');
const Schema = mongoose.Schema

const consultantSchema = new Schema({
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
        //enum: ['Marketing', 'Legal', 'Financial-planning', 'Horoscope', 'Tutoring', 'Feng-shui', 'Psychologist']
    }
})

consultantSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const ConsultantModel = mongoose.model('Consultant', consultantSchema)
module.exports = ConsultantModel