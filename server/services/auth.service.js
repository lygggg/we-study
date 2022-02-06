const authRepo = require("../repositorys/auth.repository");

module.exports = {
  async signUpUser(req, res) {
    const { _id, name, email } = req.body;
    const user = await authRepo.createUser(_id, name, email);
    res.status(200).json({ user, message: "success add new user" });
  },
};
