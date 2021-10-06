const mongoose = require('mongoose');
const Schema = mongoose.Schema

const movingServicesSchema = new Schema({
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
        //enum: ['Help Moving', 'Furniture Movers', 'Rearrange Furniture']
    }
})


const MovingServicesModel = mongoose.model('MovingServices', movingServicesSchema)

module.exports = MovingServicesModel