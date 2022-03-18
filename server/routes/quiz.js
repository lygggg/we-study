const express = require("express");
const authChecker = require("../middlewares/authChecker.js");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizService = require("../services/quiz.service.js");

router.get("/", authChecker, errorCatcher(quizService.getQuizs));
router.get("/count", errorCatcher(quizService.getQuizCount));
router.get("/addlist", authChecker, errorCatcher(quizService.getUserAddQuiz));
router.post("/", authChecker, errorCatcher(quizService.createQuiz));
router.delete("/:quizId", authChecker, errorCatcher(quizService.removeQuiz));
router.patch("/", authChecker, errorCatcher(quizService.updateQuiz));

module.exports = router;
