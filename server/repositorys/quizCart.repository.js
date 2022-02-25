const QuizCart = require("../models/quizCart.js");

module.exports = {
  async getCart(userId) {
    const carts = await QuizCart.find({
      user: userId,
    }).populate({
      path: "quiz",
      populate: {
        path: "user",
      },
    });
    return carts;
  },
};
