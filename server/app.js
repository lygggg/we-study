const express = require("express");
require("./models");
require("dotenv").config();

const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN_DEV, credential: true }));
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
