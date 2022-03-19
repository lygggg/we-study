const authRepo = require("../repositorys/auth.repository");
const quizRepo = require("../repositorys/quiz.repository.js");
const likeQuizRepo = require("../repositorys/likeQuiz.repository");

module.exports = {
  async signUpUser(req, res) {
    const { name, email, userId } = req.body;
    const user = await authRepo.createUser(userId, name, email);
    res.status(201).json({ user, message: "success add new user" });
    return;
  },

  async getUser(req, res) {
    const { userId } = req.body;
    const user = await authRepo.findUser(userId);
    const quizCount = await quizRepo.getQuizAllCount();
    const myQuiz = await quizRepo.getUserAddQuizAll(userId);
    const likeQuiz = await likeQuizRepo.getLikeQuiz(userId);
    res.status(200).json({
      user: {
        ...user, // 몽구스로 가져온 객체는 보호된 필드라 _doc를 사용하면 오브젝트 안을 볼 수 있다.
        quizCount: quizCount,
        myQuizCount: myQuiz.length,
        likeQuizCount: likeQuiz.length,
      },
    });
  },
};
