const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias, eius dolorem officia molestiae veritatis a nam dolores illum beatae?",
        user_id: 1,
        post_id: 1
    },
    {
        id: 2,
        comment_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias, eius dolorem officia molestiae veritatis a nam dolores illum beatae?",
        user_id: 2,
        post_id: 2
    },
    {
        id: 3,
        comment_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias, eius dolorem officia molestiae veritatis a nam dolores illum beatae?",
        user_id: 2,
        post_id: 3
    },
    {
        id: 4,
        comment_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias, eius dolorem officia molestiae veritatis a nam dolores illum beatae?",
        user_id: 1,
        post_id: 4
    },
    {
        id: 5,
        comment_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias, eius dolorem officia molestiae veritatis a nam dolores illum beatae?",
        user_id: 3,
        post_id: 5
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;