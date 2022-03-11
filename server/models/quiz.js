const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: { type: Number, required: true },
  quizText: { type: String, required: true },
  user: [{ type: String, ref: "users", required: true }],
  answerText: { type: String, required: true, maxlength: 300 },
  img: { type: String, required: true },
  like: { type: Boolean },
  likeCount: { type: Number, required: true },
  like_users: [{ type: String }],
});

module.exports = mongoose.model("quizzes", quizSchema);
