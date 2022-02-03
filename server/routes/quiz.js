const express = require("express");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizService = require("../services/quiz.service.js");

router.get("/", errorCatcher(quizService.getQuizs));

module.exports = router;
