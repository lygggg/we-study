const Quiz = require("../models/quiz");

module.exports = {
  async getQuizAll(category) {
    const quizs = await Quiz.find({ category: category });
    return quizs;
  },
};
