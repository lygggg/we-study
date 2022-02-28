const jwt = require("jsonwebtoken");

const authChecker = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(403).json({ message: "not Authorization header" });
  }

  const userId = jwt.decode(token.split(" ")[1]).user_id;

  if (!userId) {
    res.status(403).json({ message: "not token" });
  }
  req.body.userId = userId;
  next();
};

module.exports = authChecker;
