const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  category: { type: Number, required: true },
  quizText: { type: String, required: true },
  userEmail: { type: String, required: true },
  answerText: { type: String, required: true },
});

module.exports = mongoose.model("quizzes", quizSchema);
