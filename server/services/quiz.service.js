const quizRepo = require("../repositorys/quiz.repository.js");
// const jwt = require("jsonwebtoken");

module.exports = {
  async getQuizs(req, res) {
    const quizs = await quizRepo.getQuizAll(req.query.category);
    res.status(200).json({ quizs });
  },

  async getQuizCount(req, res) {
    const quizs = await quizRepo.getQuizAllCount();
    res.status(200).json({ quizs });
  },

  async createQuiz(req, res) {
    // const token = req.header("Authorization").split(" ")[1];
    // const email = jwt.decode(token).email;

    const { quizText, answerText, category, id } = req.body;
    const quizs = await quizRepo.createQuiz(quizText, answerText, category, id);
    res.status(200).json({ quizs, message: " success add new quiz" });
  },
};
