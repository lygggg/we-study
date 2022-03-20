const searchRepo = require("../repositorys/search.repository.js");

module.exports = {
  async getSearchQuiz(req, res) {
    const { userId } = req.body;
    const { query, page } = req.query;
    const quizs = await searchRepo.getSearchQuiz(query, userId, page);
    res.status(200).json(quizs);
  },
};
