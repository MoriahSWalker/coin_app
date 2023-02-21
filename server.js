const express = require("express");
require("dotenv").config();

const app = express();

app.listen(4000, () => {
  console.log(`Server is Listening on 4000`);
});
