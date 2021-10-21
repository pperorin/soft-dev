const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cleaningSchema = new Schema({
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
        //enum: ['House Cleaning Services', 'Disinfecting Services', 'Laundry Help', 'Air Conditioning Cleaning Service']
    }
})

cleaningSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const CleaningModel = mongoose.model('Cleaning', cleaningSchema)
module.exports = CleaningModel