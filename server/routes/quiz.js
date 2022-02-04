const express = require("express");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizService = require("../services/quiz.service.js");

router.post("/", errorCatcher(quizService.getQuizs));
router.get("/", errorCatcher(quizService.getQuizCount));

module.exports = router;
