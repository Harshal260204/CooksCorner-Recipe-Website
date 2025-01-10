const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../Controllers/userController.js');
// const authenticateUser = require("../Middlewere/Auth_middlewere.js")
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)


module.exports = router;
