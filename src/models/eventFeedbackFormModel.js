const mongoose = require('mongoose');
const eventFeedbackSchema = new mongoose.Schema({
    Rating: Number,
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


module.exports = mongoose.model('eventFeedback', eventFeedbackSchema)