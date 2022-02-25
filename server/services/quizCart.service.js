const quizCartRepo = require("../repositorys/quizCart.repository");
const jwt = require("jsonwebtoken");

module.exports = {
  async putQuizCart(req, res) {
    const { quizId } = req.body;
    const token = req.header("Authorization").split(" ")[1];
    const userId = jwt.decode(token).user_id;
    const quizCart = await quizCartRepo.putCart(quizId, userId);
    res.status(200).json({ quizCart, message: "success put new quiz" });
  },

  async getQuizCart(req, res) {
    const token = req.header("Authorization").split(" ")[1];
    const userId = jwt.decode(token).user_id;
    const quizCart = await quizCartRepo.getCart(userId);
    res.status(200).json({ quizCart });
  },
};
