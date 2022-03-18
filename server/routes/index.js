const express = require("express");

const router = express.Router();
console.log("라우트");
router.use("/users", require("./auth"));
router.use("/quizs", require("./quiz"));
router.use("/search", require("./search"));
router.use("/quizs", require("./likeQuiz"));

module.exports = router;
