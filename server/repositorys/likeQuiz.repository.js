const Quiz = require("../models/quiz.js");
const LikeQuiz = require("../models/likeQuiz.js");

const MAX_PAGE = 8;

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

  async getLikeQuiz(userId, page) {
    const likeQuizs = await LikeQuiz.find({
      user: userId,
    })
      .populate({
        path: "quiz",
        populate: {
          path: "user",
        },
      })
      .skip(MAX_PAGE * page)
      .limit(MAX_PAGE)
      .lean();

    const totalQuizs = await LikeQuiz.find({ user: userId }).count();
    const quizs = likeQuizs.map((x) => {
      return { ...x.quiz, type: x.type, like: true };
    });
    return { quizs, totalCount: totalQuizs };
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
