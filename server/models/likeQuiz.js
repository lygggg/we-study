const mongoose = require("mongoose");

const likeQuizSchema = new mongoose.Schema({
  quiz: { type: String, ref: "quizzes", required: true },
  user: { type: String, ref: "users", required: true },
  syncTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("likequizs", likeQuizSchema);
