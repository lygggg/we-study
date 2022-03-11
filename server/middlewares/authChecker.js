const jwt = require("jsonwebtoken");

const authChecker = (req, res, next) => {
  const token = req.header("Authorization");
  let userId;

  if (token) {
    userId = jwt.decode(token.split(" ")[1]).user_id;
  }

  if (userId) {
    req.body.userId = userId;
  }
  next();
};

module.exports = authChecker;
