const mongoose = require('mongoose');
const Schema = mongoose.Schema

const movingServicesSchema = new Schema({
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
        enum: ['Help Moving', 'Furniture Movers', 'Rearrange Furniture']
    }
})


const MovingServicesModel = mongoose.model('MovingServices', movingServicesSchema)

module.exports = MovingServicesModel