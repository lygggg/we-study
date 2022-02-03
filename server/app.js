const express = require("express");

const cors = require("cors");

const app = express();

const port = 3000;

require("./models");
require("dotenv").config();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN_DEV, credential: true }));
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
