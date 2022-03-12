const express = require("express");
const authChecker = require("../middlewares/authChecker.js");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const searchService = require("../services/search.service");

router.get("/", authChecker, errorCatcher(searchService.getSearchQuiz));

module.exports = router;
