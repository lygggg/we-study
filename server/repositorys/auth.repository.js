const User = require("../models/user");

module.exports = {
  async createUser(id, name, email) {
    const user = await User.create({
      _id: id,
      name,
      email,
    });
    return user;
  },

  async findUser(id) {
    const user = await User.findOne({ _id: id });
    return user;
  },

  async findUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  },
};
