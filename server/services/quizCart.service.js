const quizCartRepo = require("../repositorys/quizCart.repository");

module.exports = {
  async putQuizCart(req, res) {
    const { quizId, userId } = req.body;
    const quizCart = await quizCartRepo.putCart(quizId, userId);
    res.status(200).json({ quizCart, message: "success put new quiz" });
  },

  async getQuizCart(req, res) {
    const { userId } = req.body;
    const quizCart = await quizCartRepo.getCart(userId);
    res.status(200).json({ quizCart });
  },

  async removeQuizCart(req, res) {
    const { userId } = req.body;
    const { quizId } = req.params;
    await quizCartRepo.removeCart(quizId, userId);
    res.status(200).json({ message: "success remove quiz" });
  },
};
