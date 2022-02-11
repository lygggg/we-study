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

  async createQuiz(quizText, answerText, category, id) {
    const data = {
      category: category,
      quizText: quizText,
      user: id,
      answerText: answerText,
    };

    const quiz = await Quiz.create(data);
    await index.saveObjects([data], { autoGenerateObjectIDIfNotExist: true });
    console.log(quiz); // 이거 데이터 가져와서 populate해야하나..?
    return quiz;
  },
};
