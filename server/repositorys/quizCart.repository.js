const Quiz = require("../models/quiz.js");
const QuizCart = require("../models/quizCart.js");

module.exports = {
  async putCart(quizId, userId) {
    const checkCart = await QuizCart.find({ quiz: quizId, user: userId });
    if (checkCart.length > 0) {
      return;
    }
    const cart = await QuizCart.create({
      quiz: quizId,
      user: userId,
    });

    await Quiz.updateOne(
      { _id: quizId },
      {
        $inc: { likeCount: 1 },
        $push: { like_users: userId },
      },
    );
    return cart;
  },

  async getCart(userId) {
    const carts = await QuizCart.find({
      user: userId,
    })
      .populate({
        path: "quiz",
        populate: {
          path: "user",
        },
      })
      .lean();
    return carts.map((x) => {
      return { ...x.quiz, type: x.type, like: true };
    });
  },

  async removeCart(quizId, userId) {
    await QuizCart.deleteOne({ quiz: quizId, user: userId });
    await Quiz.updateOne(
      { _id: quizId },
      {
        $inc: { likeCount: -1 },
        $pull: { like_users: userId },
      },
    );
  },
};
