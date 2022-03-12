const searchRepo = require("../repositorys/search.repository.js");

module.exports = {
  async getSearchQuiz(req, res) {
    const { userId } = req.body;
    const quizs = await searchRepo.getSearchQuiz(req.query.query, userId);
    res.status(200).json({ quizs });
  },
};
