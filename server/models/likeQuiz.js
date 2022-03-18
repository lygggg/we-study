const mongoose = require("mongoose");

const likeQuizSchema = new mongoose.Schema({
  quiz: { type: String, ref: "quizzes", required: true },
  user: { type: String, ref: "users", required: true },
});

module.exports = mongoose.model("likequizs", likeQuizSchema);
