const QuizCart = require("../models/quizCart.js");

module.exports = {
  async putCart(quizId, userId) {
    const cart = await QuizCart.create({
      quiz: quizId,
      user: userId,
    });
    return cart;
  },

  async getCart(userId) {
    const carts = await QuizCart.find({
      user: userId,
    }).populate({
      path: "quiz",
      populate: {
        path: "user",
      },
    });
    return carts.map((x) => x.quiz);
  },

  async removeCart(quizId, userId) {
    await QuizCart.deleteOne({ quiz: quizId, user: userId });
  },
};
