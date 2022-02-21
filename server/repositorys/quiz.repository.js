const Quiz = require("../models/quiz");
const algoliasearch = require("algoliasearch");

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

module.exports = {
  async getQuizAll(category) {
    const quizs = await Quiz.find({ category: category }).populate("user");
    return quizs;
  },

  async getQuizAllCount() {
    const quizs = await Quiz.find();
    return quizs.length;
  },

  async createQuiz(quizText, answerText, category, userId, img) {
    const data = {
      category: category,
      quizText: quizText,
      user: userId,
      answerText: answerText,
      img,
    };

    const quiz = await Quiz.create(data);
    const searchQuiz = await Quiz.find({ _id: quiz._id }).populate("user");
    await index.saveObjects(
      [
        {
          ...searchQuiz[0]._doc,
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
