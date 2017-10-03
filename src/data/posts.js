import _ from "lodash";

let posts = [];
for (let i = 1; i <= 3; i++) {
  posts.push({
    id: _.uniqueId("post_"),
    title: "Post " + i,
    content: "Post's content " + i
  });
}

export default posts;
