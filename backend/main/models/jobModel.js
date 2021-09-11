const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    name: {
        type: String,
        require: true
    }
})

const jobModel = mongoose.model('Job', jobSchema)


module.exports = jobModel