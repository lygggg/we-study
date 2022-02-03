const quizRepo = require("../repositorys/quiz.repository.js");

module.exports = {
  async getQuizs(req, res) {
    // const {  } = req.body;
    const quizs = await quizRepo.getQuizAll();

    res.status(200).json({ quizs });
  },
};
