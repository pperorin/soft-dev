const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reportSchema = new Schema(
    {
        description: {
            type: String,
            required: [true, 'Description can not be empty!']
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        tasker: {
            type: mongoose.Schema.ObjectId,
            ref: 'Tasker',
            required: [true, 'Review must belong to a tasker.']
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Review must belong to a user']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);


const ReportModel = mongoose.model('Report', reportSchema)
module.exports = ReportModel