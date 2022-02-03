const express = require("express");

const app = express();

const port = 3000;

require("./models");
require("dotenv").config();
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
