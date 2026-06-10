const express = require('express')
const router = express.Router()

const registerController = require('../controllers/registerController')

router.get('/register', registerController.getRegister)
router.post('/register', registerController.createRegister)

module.exports = router;


