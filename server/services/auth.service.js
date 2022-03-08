const authRepo = require("../repositorys/auth.repository");
const quizRepo = require("../repositorys/quiz.repository.js");
const quizCartRepo = require("../repositorys/quizCart.repository");

module.exports = {
  async signUpUser(req, res) {
    const { name, email, userId } = req.body;
    const user = await authRepo.createUser(userId, name, email);
    res.status(200).json({ user, message: "success add new user" });
    return;
  },

  async loginUser(req, res) {
    const { userId } = req.body;
    const user = await authRepo.findUser(userId);
    const myQuiz = await quizRepo.getUserAddQuizAll(userId);
    const quizCart = await quizCartRepo.getCart(userId);
    res.status(200).json({
      user: {
        ...user?._doc, // 몽구스로 가져온 객체는 보호된 필드라 _doc를 사용하면 오브젝트 안을 볼 수 있다.
        myQuizCount: myQuiz.length,
        cartCount: quizCart.length,
      },
    });
  },
};
