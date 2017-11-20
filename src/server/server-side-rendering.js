require("ignore-styles");

const express = require("express");
const app = express();
const renderToString = require("react-dom/server").renderToString;
const App = require("../App.js").default;
const fs = require("fs");
const path = require("path");
const React = require("react");

app.use("/static", express.static("build/static"));

app.get("/", (req, res) => {
  fs.readFile(
    path.resolve(__dirname, "../../build/index.html"),
    "utf8",
    (er, html) => {
      console.log(html);
    }
  );
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
