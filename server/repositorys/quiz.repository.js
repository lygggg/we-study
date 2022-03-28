const Quiz = require("../models/quiz");
const LikeQuiz = require("../models/likeQuiz.js");
const algoliasearch = require("algoliasearch");

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

const MAX_PAGE = 8;

module.exports = {
  async getQuizAll(category, userId, page) {
    const quizs = await Quiz.find({ category: category })
      .populate("user")
      .skip(MAX_PAGE * (page - 1))
      .limit(MAX_PAGE)
      .lean();

    const totalQuizs = await Quiz.find({ category: category }).count();

    if (userId) {
      quizs.forEach((quiz) => {
        if (quiz.like_users.indexOf(userId) !== -1) {
          quiz.like = true;
        }
      });
    }
    return {
      quizs,
      length: totalQuizs,
    };
  },

  async getQuizAllCount() {
    const quizs = await Quiz.find().count();
    return quizs;
  },

  async createQuiz(quizText, answerText, category, userId, img) {
    const data = {
      category: category,
      quizText: quizText,
      user: userId,
      answerText: answerText,
      img,
      likeCount: 0,
      like: false,
    };

    let quiz = await Quiz.create(data);
    quiz = await quiz.populate("user");

    const searchQuiz = await Quiz.find({ _id: quiz._id })
      .populate("user")
      .lean();
    await index.saveObjects(
      [
        {
          ...searchQuiz[0],
          objectID: String(searchQuiz[0]._id),
          user: searchQuiz[0].user[0].name,
        },
      ],
      {
        autoGenerateObjectIDIfNotExist: true,
      },
    );
    return quiz;
  },

  async getUserAddQuizAll(userId, page) {
    const quizs = await Quiz.find({ user: userId })
      .populate("user")
      .skip(MAX_PAGE * page)
      .limit(MAX_PAGE)
      .lean();

    const totalQuizs = await Quiz.find({ user: userId }).count();

    if (userId) {
      quizs.forEach((quiz) => {
        if (quiz.like_users.indexOf(userId) !== -1) {
          quiz.like = true;
        }
      });
    }
    return { quizs, totalCount: totalQuizs };
  },

  async removeQuiz(quizId, userId) {
    const quiz = await Quiz.deleteOne({ _id: quizId, user: { $in: userId } });
    await LikeQuiz.deleteOne({ quiz: quizId, user: userId });
    if (quiz) {
      await index.deleteObject(quizId);
    }
    return quiz;
  },

  async updateQuiz(quizId, userId, quizText, answerText) {
    const quiz = await Quiz.updateOne(
      {
        _id: quizId,
        userId: userId,
      },
      { $set: { quizText: quizText, answerText: answerText } },
    );
    return quiz;
  },
};
