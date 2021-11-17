const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "Article1",
    post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    user_id: 1,
  },
  {
    id: 2,
    title: "Article2",
    post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    user_id: 2,
  },
  {
    id: 3,
    title: "Article3",
    post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    user_id: 3,
  },
  {
    id: 4,
    title: "Article4",
    post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    user_id: 4,
  },
  {
    id: 5,
    title: "Article5",
    post_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
