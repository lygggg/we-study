const quizRepo = require("../repositorys/quiz.repository.js");

module.exports = {
  async getQuizs(req, res) {
    const { category } = req.body;
    const quizs = await quizRepo.getQuizAll(category);

    res.status(200).json({ quizs });
  },

  async getQuizCount(req, res) {
    const quizs = await quizRepo.getQuizAllCount();

    res.status(200).json({ quizs });
  },
};
