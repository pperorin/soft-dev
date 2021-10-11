const mongoose = require('mongoose');
const Schema = mongoose.Schema

const handymanSchema = new Schema({
    id: {
        type: Schema.ObjectId
    },
    firstname: String,
    lastname: String,
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

const HandymanModel = mongoose.model('Handyman', handymanSchema)

module.exports = HandymanModel