const Quiz = require("../models/quiz.js");
const LikeQuiz = require("../models/likeQuiz.js");

module.exports = {
  async putLikeQuiz(quizId, userId) {
    const checkLikeQuiz = await LikeQuiz.find({ quiz: quizId, user: userId });
    if (checkLikeQuiz.length > 0) {
      return;
    }
    const likeQuiz = await LikeQuiz.create({
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
    return likeQuiz;
  },

  async getLikeQuiz(userId) {
    const likeQuizs = await LikeQuiz.find({
      user: userId,
    })
      .populate({
        path: "quiz",
        populate: {
          path: "user",
        },
      })
      .lean();
    return likeQuizs.map((x) => {
      return { ...x.quiz, type: x.type, like: true };
    });
  },

  async removeLikeQuiz(quizId, userId) {
    const checkLikeQuiz = await LikeQuiz.find({ quiz: quizId, user: userId });
    if (checkLikeQuiz.length < 1) {
      return;
    }
    await LikeQuiz.deleteOne({ quiz: quizId, user: userId });
    await Quiz.updateOne(
      { _id: quizId },
      {
        $inc: { likeCount: -1 },
        $pull: { like_users: userId },
      },
    );
  },
};
