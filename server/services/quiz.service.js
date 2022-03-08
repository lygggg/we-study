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

  async getUserAddQuiz(req, res) {
    const { userId } = req.body;
    const quizs = await quizRepo.getUserAddQuizAll(userId);
    res.status(200).json({ quizs });
  },

  async createQuiz(req, res) {
    const { userId, quizText, answerText, category, img } = req.body;
    const quizs = await quizRepo.createQuiz(
      quizText,
      answerText,
      category,
      userId,
      img,
    );

    if (quizs) {
      res.status(200).json({ quizs, message: " success add new quiz" });
      return;
    }
    res.status(403).json({ state: false, message: "Can't create quiz" });
  },
};
