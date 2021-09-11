const APIFeatures = require('./../utils/apiFeatures');
const Job = require('../models/jobModel');

exports.getAllUsers = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Job.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();    //page='int'&limit='int'

        // SEND RESPONSE
        const jobs = await features.query;
        res.status(200).json({
            status: 'success',
            result: jobs.length,
            data: {
                jobs
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}