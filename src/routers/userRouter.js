const express = require('express')
const {userRegister, userLogin, changePassword} = require('../controller/userController')

const router = new express.Router();



router.post('/api/register', userRegister);
router.post('/api/login', userLogin);
router.post('/api/change-password', changePassword);




module.exports = router;