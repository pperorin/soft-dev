const mongoose = require('mongoose');
const Schema = mongoose.Schema

const consultAndRecommendSchema = new Schema({
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
        type: String
        // enum:[]
    }
})


const MinorRepairModel = mongoose.model('ConsultAndRecommend', minorRepairSchema)

module.exports = MinorRepairModel