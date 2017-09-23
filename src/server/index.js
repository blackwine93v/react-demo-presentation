const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");

let data = {
  posts: [
    {
      title: "Post 1",
      content: "This is post 1 content"
    },
    {
      title: "Post 2",
      content: "This is post 2 content"
    },
    {
      title: "Post 3",
      content: "This is post 3 content"
    }
  ]
};

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

app.get("/posts", function(req, res) {
  res.json(data.posts);
});

app.post("/posts", function(req, res) {
  if (req.body && (req.body.title && req.body.content)) {
    data.posts.push({
      title: req.body.title,
      content: req.body.content
    });
    res.json(true);
  }
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
