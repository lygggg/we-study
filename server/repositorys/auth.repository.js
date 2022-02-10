const User = require("../models/user");

module.exports = {
  async createUser(_id, name, email) {
    const user = await User.create({
      _id,
      name,
      email,
    });
    return user;
  },

  async findUser(email) {
    const user = await User.findOne({ email: email });
    return user;
  },
};
