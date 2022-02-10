const Quiz = require("../models/quiz");

module.exports = {
  async getQuizAll(category) {
    const quizs = await Quiz.find({ category: category }).populate("user");
    return quizs;
  },

  async getQuizAllCount() {
    const quizs = await Quiz.find();
    return quizs.length;
  },

  async createQuiz(quizText, answerText, category, id) {
    const quiz = await Quiz.create({
      category,
      quizText,
      user: id,
      answerText,
    });
    return quiz;
  },
};
