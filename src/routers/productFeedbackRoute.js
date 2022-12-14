const express = require('express');
const router = express.Router();

const { getAllProductFeedBackForms, createProductFeedbackForm, getSingleProductFeedbackForm, updateProductFeedbackForm, deleteProductFeedbackForm } = require('../controller/productFeedbackController');


router.route('/').get(getAllProductFeedBackForms).post(createProductFeedbackForm)
router.route('/:id').get(getSingleProductFeedbackForm).patch(updateProductFeedbackForm).delete(deleteProductFeedbackForm)

module.exports = router;