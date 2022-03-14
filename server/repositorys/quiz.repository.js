const Quiz = require("../models/quiz");
const algoliasearch = require("algoliasearch");

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

module.exports = {
  async getQuizAll(category, userId) {
    const quizs = await Quiz.find({ category: category })
      .populate("user")
      .lean();

    if (userId) {
      quizs.forEach((quiz) => {
        if (quiz.like_users.indexOf(userId) !== -1) {
          quiz.like = true;
        }
      });
    }
    return quizs;
  },

  async getQuizAllCount() {
    const quizs = await Quiz.find();
    return quizs.length;
  },

  async getUserAddQuizAll(userId) {
    const quizs = await Quiz.find({ user: userId }).populate("user");
    if (userId) {
      quizs.forEach((quiz) => {
        if (quiz.like_users.indexOf(userId) !== -1) {
          quiz.like = true;
        }
      });
    }
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
};
