require("ignore-styles");

const express = require("express");
const app = express();

app.use("/static", express.static("build/static"));

app.get("/", (req, res) => {
  res.send("From server");
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
