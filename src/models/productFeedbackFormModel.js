const mongoose = require('mongoose');
const ProductFeedbackSchema = new mongoose.Schema({
    Name: String,
    Email: {
        type: String,
        required: true,
        unique: true
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('ProductFeedback', ProductFeedbackSchema)