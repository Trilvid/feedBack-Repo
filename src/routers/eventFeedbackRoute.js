const express = require('express');
const { getAllEventFeedBackForms, createEventFeedbackForm, getSingleEventFeedbackForm, updateEventFeedbackForm, deleteEventFeedbackForm } = require('../controller/eventFeedbackController');
const router = express.Router();

router.route('/').get(getAllEventFeedBackForms).post(createEventFeedbackForm)
router.route('/:id').get(getSingleEventFeedbackForm).patch(updateEventFeedbackForm).delete(deleteEventFeedbackForm)

module.exports = router;