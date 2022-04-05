const algoliasearch = require("algoliasearch");
const quiz = require("../models/quiz");

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

const MAX_PAGE = 8;

module.exports = {
  async getSearchQuiz(query, userId, page) {
    const { hits } = await index.search(query);
    const quizs = await quiz
      .find()
      .in(
        "_id",
        hits.map((x) => x._id),
      )
      .populate("user")
      .skip(MAX_PAGE * page)
      .limit(MAX_PAGE);
    const totalQuizs = await index.search(query);
    if (userId) {
      quizs.forEach((quiz) => {
        if (quiz.like_users.indexOf(userId) !== -1) {
          quiz.like = true;
          quiz.likeCount = quiz.like_users.length;
        }
      });
    }
    return { quizs, totalCount: totalQuizs.nbHits };
  },
};
