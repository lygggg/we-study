const quizCartRepo = require("../repositorys/quizCart.repository");
const jwt = require("jsonwebtoken");

module.exports = {
  async getQuizCart(req, res) {
    const token = req.header("Authorization").split(" ")[1];
    const userId = jwt.decode(token).user_id;
    const quizCart = await quizCartRepo.getCart(userId);
    res.status(200).json({ quizCart });
  },
};
