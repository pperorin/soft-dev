const mongoose = require('mongoose');
const Schema = mongoose.Schema

const handymanSchema = new Schema({
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
        //enum: ['Home Repairs', 'Furniture Assembly', 'Plumbing', 'Mounting', 'Electrical Help', 'Heavy Lifting']
    }
})

handymanSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const HandymanModel = mongoose.model('Handyman', handymanSchema)
module.exports = HandymanModel