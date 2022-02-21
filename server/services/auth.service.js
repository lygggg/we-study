const jwt = require("jsonwebtoken");

const authRepo = require("../repositorys/auth.repository");

module.exports = {
  async signUpUser(req, res) {
    const { name, email } = req.body;
    const token = req.header("Authorization").split(" ")[1];
    const id = jwt.decode(token).user_id;
    const user = await authRepo.createUser(id, name, email);
    res.status(200).json({ user, message: "success add new user" });
  },

  async loginUser(req, res) {
    const token = req.header("Authorization").split(" ")[1];
    const id = jwt.decode(token).user_id;

    const user = await authRepo.findUser(id);
    res.status(200).json({ user });
  },
};
