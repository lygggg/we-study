const express = require("express");

const router = express.Router();
console.log("라우트");
router.use("/auth", require("./auth"));
router.use("/quiz", require("./quiz"));
router.use("/search", require("./search"));

module.exports = router;
