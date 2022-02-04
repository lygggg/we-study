const quizRepo = require("../repositorys/quiz.repository.js");

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
    const { quizText, answerText, category, userEmail } = req.body;
    const quizs = await quizRepo.createQuiz(
      quizText,
      answerText,
      category,
      userEmail,
    );
    res.status(200).json({ message: " success add new quiz" }, quizs);
  },
};
