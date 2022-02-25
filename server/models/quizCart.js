const mongoose = require("mongoose");

const quizCartSchema = new mongoose.Schema({
  quiz: { type: String, ref: "quizzes", required: true, unique: true },
  user: { type: String, ref: "users", required: true },
});

module.exports = mongoose.model("quizcarts", quizCartSchema);
