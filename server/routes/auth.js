const express = require("express");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const authService = require("../services/auth.service.js");

router.post("/signup", errorCatcher(authService.signUpUser));
router.post("/login", errorCatcher(authService.loginUser));

module.exports = router;
