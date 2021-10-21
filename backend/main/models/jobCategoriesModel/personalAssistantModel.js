const mongoose = require('mongoose');
const Schema = mongoose.Schema

const personalAssistantSchema = new Schema({
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
        require: true
        //['Friend trave', 'Furniture Movers', 'Rearrange Furniture']
    }
})

personalAssistantSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'id',
        select: ['firstname', 'lastname']
    })

    next();
});

const PersonalAssistantModel = mongoose.model('PersonalAssistant', personalAssistantSchema)
module.exports = PersonalAssistantModel