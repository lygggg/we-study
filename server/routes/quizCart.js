const express = require("express");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizCartService = require("../services/quizCart.service.js");

router.post("/", errorCatcher(quizCartService.putQuizCart));
router.get("/", errorCatcher(quizCartService.getQuizCart));

module.exports = router;
