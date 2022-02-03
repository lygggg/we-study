const quizRepo = require("../repositorys/quiz.repository.js");

module.exports = {
  async getQuizs(req, res) {
    const { category } = req.body;
    const quizs = await quizRepo.getQuizAll(category);

    res.status(200).json({ quizs });
  },
};
