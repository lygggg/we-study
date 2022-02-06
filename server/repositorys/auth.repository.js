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
};
