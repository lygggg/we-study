const express = require("express");
const authChecker = require("../middlewares/authChecker.js");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const authService = require("../services/auth.service.js");

router.post("/signup", authChecker, errorCatcher(authService.signUpUser));
router.post("/me", authChecker, errorCatcher(authService.loginUser));

module.exports = router;
