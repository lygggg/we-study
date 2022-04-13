const express = require("express");

const router = express.Router();
router.get("/", (res) => res.json({}));
router.use("/users", require("./auth"));
router.use("/quizs", require("./quiz"));
router.use("/search", require("./search"));
router.use("/quizs", require("./likeQuiz"));

module.exports = router;
