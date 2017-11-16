import _ from "lodash";

function generateID() {
  return _.uniqueId("POST_");
}

const getAllPost = () => {
  return {
    type: "GET_ALL"
  };
};

const createPost = (title, content) => {
  return {
    type: "CREATE",
    payload: { id: generateID(), title: title, content: content }
  };
};

const delelePost = postId => {
  return {
    type: "DELETE",
    payload: postId
  };
};

export { getAllPost, createPost, delelePost };
