import fetch from "./myFetch.js";
export default {
  getAllPost: function() {
    return fetch.get("/posts");
  },

  createPost: function(title, content) {
    return fetch.post("/posts", {
      title: title,
      content: content
    });
  }
};
