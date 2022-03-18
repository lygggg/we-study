const express = require("express");
const authChecker = require("../middlewares/authChecker.js");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const likeQuizService = require("../services/likeQuiz.service.js");

router.post(
  "/favorite",
  authChecker,
  errorCatcher(likeQuizService.putLikeQuiz),
);
router.get("/favorite", authChecker, errorCatcher(likeQuizService.getLikeQuiz));
router.delete(
  "/:quizId/favorite",
  authChecker,
  errorCatcher(likeQuizService.removeLikeQuiz),
);

module.exports = router;
