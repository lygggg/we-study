const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: { type: Number, required: true },
  quizText: { type: String, required: true },
  user: [{ type: mongoose.ObjectId, ref: "users", required: true }],
  // https://mongoosejs.com/docs/populate.html
  answerText: { type: String, required: true },
});

module.exports = mongoose.model("quizzes", quizSchema);
