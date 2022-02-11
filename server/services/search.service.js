const searchRepo = require("../repositorys/search.repository.js");

module.exports = {
  async getSearchQuiz(req, res) {
    const quizs = await searchRepo.getSearchQuiz(req.query.query);
    res.status(200).json({ quizs });
  },
};
