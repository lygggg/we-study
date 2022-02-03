const express = require("express");

const router = express.Router();
console.log("라우트");
// router.use("/auth", require("./auth.js"));
router.use("/quiz", require("./quiz"));

module.exports = router;
