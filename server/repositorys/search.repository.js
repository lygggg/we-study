const algoliasearch = require("algoliasearch");

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

module.exports = {
  async getSearchQuiz(query, userId) {
    const quizs = await index.search(query);
    if (userId) {
      quizs.hits.forEach((quiz) => {
        if (quiz.like_users.indexOf(userId) !== -1) {
          quiz.like = true;
          quiz.likeCount = Number(quiz.like_users.length);
        }
      });
    }
    return quizs;
  },

  async likeQuiz(quizId, userId) {
    await index.partialUpdateObject({
      like_users: {
        _operation: "AddUnique",
        value: userId,
      },
      objectID: quizId,
    });
  },

  async unLikeQuiz(quizId, userId) {
    await index.partialUpdateObject({
      like_users: {
        _operation: "Remove",
        value: userId,
      },
      objectID: quizId,
    });
  },
};
