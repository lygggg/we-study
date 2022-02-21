const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: { type: Number, required: true },
  quizText: { type: String, required: true },
  user: [{ type: String, ref: "users", required: true }],
  answerText: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("quizzes", quizSchema);
