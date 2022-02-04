const Quiz = require("../models/quiz");

module.exports = {
  async getQuizAll(category) {
    const quizs = await Quiz.find({ category: category });
    return quizs;
  },

  async getQuizAllCount() {
    const quizs = await Quiz.find();
    return quizs.length;
  },
};
