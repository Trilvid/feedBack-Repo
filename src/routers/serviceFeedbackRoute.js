const express = require('express');
const { getAllServiceFeedBackForms, createServiceFeedbackForm, getSingleServiceFeedbackForm, updateServiceFeedbackForm, deleteServiceFeedbackForm } = require('../controller/serviceFeedbackController');
const router = express.Router();

router.route('/').get(getAllServiceFeedBackForms).post(createServiceFeedbackForm)
router.route('/:id').get(getSingleServiceFeedbackForm).patch(updateServiceFeedbackForm).delete(deleteServiceFeedbackForm)

module.exports = router;