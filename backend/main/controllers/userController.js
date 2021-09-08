const User = require('../models/userModel');
const APIFeatures = require('./../utils/apiFeatures');

// exports.aliasTopTours = (req, res, next) => {
//     req.query.limit = '5';
//     req.query.sort = 'score';
//     req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//     next();
// };

exports.getAllUsers = async (req, res) => {
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(User.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();    //page='int'&limit='int'

        // SEND RESPONSE
        const users = await features.query;
        res.status(200).json({
            status: 'success',
            result: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.createUser = async (req, res) => {
    // const newUser = new User({})
    // newUser.save()
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                User: newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};