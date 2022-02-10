const authRepo = require("../repositorys/auth.repository");

module.exports = {
  async signUpUser(req, res) {
    const { _id, name, email } = req.body;
    const user = await authRepo.createUser(_id, name, email);
    res.status(200).json({ user, message: "success add new user" });
  },

  async loginUser(req, res) {
    const { email } = req.body;
    const user = await authRepo.findUser(email);
    res.status(200).json({ user });
  },
};
