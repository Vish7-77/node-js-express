const express  = require('express');
const { signUpUser, loginUser } = require('../controllers/userController');
const router = express.Router();



router.post("/create/user", signUpUser)
router.post("/login/user", loginUser)


module.exports = router
