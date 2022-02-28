const express = require("express");
const authChecker = require("../middlewares/authChecker.js");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizCartService = require("../services/quizCart.service.js");

router.post("/", authChecker, errorCatcher(quizCartService.putQuizCart));
router.get("/", authChecker, errorCatcher(quizCartService.getQuizCart));

module.exports = router;
