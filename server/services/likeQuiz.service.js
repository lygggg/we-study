const likeQuizRepo = require("../repositorys/likeQuiz.repository");
module.exports = {
  async putLikeQuiz(req, res) {
    const { quizId, userId } = req.body;
    const likeQuiz = await likeQuizRepo.putLikeQuiz(quizId, userId);
    if (likeQuiz) {
      res.status(200).json({ likeQuiz, message: "success put new quiz" });
      return;
    }
    res.status(403).json({ state: false, message: "already likeQuiz" });
  },

  async getLikeQuiz(req, res) {
    const { userId } = req.body;
    const { page } = req.query;
    const quizs = await likeQuizRepo.getLikeQuiz(userId, page);
    res.status(200).json(quizs);
  },

  async removeLikeQuiz(req, res) {
    const { userId } = req.body;
    const { quizId } = req.params;
    await likeQuizRepo.removeLikeQuiz(quizId, userId);
    res.status(200).json({ message: "success remove quiz" });
  },
};
