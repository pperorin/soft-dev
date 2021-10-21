const mongoose = require('mongoose');
const Schema = mongoose.Schema

const mountingSchema = new Schema({
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
        //enum: ['TV Mounting', 'Hanging Curtains & Installing Blinds', 'Mounting solar', 'Door & Window Installation', 'Light Installation']
    }
})

mountingSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const MountingModel = mongoose.model('Mounting', mountingSchema)
module.exports = MountingModel