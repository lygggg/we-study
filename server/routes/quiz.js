const express = require("express");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizService = require("../services/quiz.service.js");

router.get("/", errorCatcher(quizService.getQuizs));
router.get("/count", errorCatcher(quizService.getQuizCount));
router.get("/addlist", errorCatcher(quizService.getUserAddQuiz));
router.post("/", errorCatcher(quizService.createQuiz));

module.exports = router;
