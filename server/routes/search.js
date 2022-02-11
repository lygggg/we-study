const express = require("express");

const router = express.Router();

const errorCatcher = require("../middlewares/errorCatcher.js");
const searchService = require("../services/search.service");

router.get("/", errorCatcher(searchService.getSearchQuiz));

module.exports = router;
