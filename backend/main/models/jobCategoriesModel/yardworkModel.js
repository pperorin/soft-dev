const mongoose = require('mongoose');
const Schema = mongoose.Schema

const yardworkSchema = new Schema({
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
        //enum: ['Tree Trimming Service', 'Hedge Trimming Service', 'Lawn Mowing', 'Gutter Cleaning', 'Patio Cleaning', 'Pool Cleaning Services']
    }
})

yardworkSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const YardworkModel = mongoose.model('Yardwork', yardworkSchema)
module.exports = YardworkModel