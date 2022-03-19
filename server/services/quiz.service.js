const quizRepo = require("../repositorys/quiz.repository.js");

module.exports = {
  async getQuizs(req, res) {
    const { userId } = req.body;
    const { category, page } = req.query;
    const quizs = await quizRepo.getQuizAll(category, userId, page);
    res.status(200).json({ quizs });
  },

  async getUserAddQuiz(req, res) {
    const { userId } = req.body;
    const { page } = req.query;
    const quizs = await quizRepo.getUserAddQuizAll(userId, page);
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
      res.status(201).json({ quizs, message: " success add new quiz" });
      return;
    }
    res.status(403).json({ state: false, message: "Can't create quiz" });
  },

  async removeQuiz(req, res) {
    const { userId } = req.body;
    const { quizId } = req.params;
    const quiz = await quizRepo.removeQuiz(quizId, userId);

    if (quiz) {
      res.status(200).json({ quiz, message: " success remove quiz" });
      return;
    }
    res.status(403).json({ state: false, message: "Can't remove quiz" });
  },

  async updateQuiz(req, res) {
    const { quizId, userId, quizText, answerText } = req.body;
    const quiz = await quizRepo.updateQuiz(
      quizId,
      userId,
      quizText,
      answerText,
    );
    if (quiz) {
      res.status(200).json({ state: 200, message: " success update quiz" });
      return;
    }
    res.status(403).json({ state: false, message: "Can't update quiz" });
  },
};
