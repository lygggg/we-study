const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  user: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("quizzes", quizSchema);
