const express = require("express");
const authChecker = require("../middlewares/authChecker.js");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const quizCartService = require("../services/quizCart.service.js");

router.post(
  "/favorite",
  authChecker,
  errorCatcher(quizCartService.putQuizCart),
);
router.get("/favorite", authChecker, errorCatcher(quizCartService.getQuizCart));
router.delete(
  "/:quizId/favorite",
  authChecker,
  errorCatcher(quizCartService.removeQuizCart),
);

module.exports = router;
