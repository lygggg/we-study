const Quiz = require("../models/quiz");

module.exports = {
  async getQuizAll() {
    const quizs = await Quiz.find({});
    console.log(quizs);
    return quizs;
  },
};
