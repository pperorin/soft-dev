const mongoose = require('mongoose');
const Schema = mongoose.Schema

const yardworkSchema = new Schema({
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
        enum: ['Tree Trimming Service', 'Hedge Trimming Service', 'Lawn Mowing', 'Gutter Cleaning', 'Patio Cleaning', 'Pool Cleaning Services']
    }
})


const YardworkModel = mongoose.model('Yardwork', yardworkSchema)

module.exports = YardworkModel