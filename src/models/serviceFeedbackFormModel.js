const mongoose = require('mongoose');
const ServiceFeedbackSchema = new mongoose.Schema ({
    Title: String,
    Description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})





module.exports = mongoose.model('ServiceFeedback', ServiceFeedbackSchema)