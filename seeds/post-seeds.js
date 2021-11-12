const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "Article1",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem quibusdam cum quidem ea numquam molestias dignissimos tempora fugiat, facilis vel officiis atque maxime, inventore adipisci dolorum officia nam! Cum maiores commodi quia consequuntur, debitis harum sint porro reprehenderit asperiores facere et ratione rerum aliquid laudantium similique deleniti aliquam, incidunt accusantium aperiam maxime saepe veritatis? Harum, aperiam? Dolorem, necessitatibus dignissimos tenetur earum maiores tempora asperiores aliquid ullam ea quia suscipit corporis nisi iure praesentium, doloremque quibusdam eius optio et ex architecto fuga incidunt! Maiores placeat, nostrum delectus atque cupiditate accusantium ullam enim ipsum libero! Commodi itaque deserunt ullam modi maiores.",
    user_id: 1,
  },
  {
    id: 2,
    title: "Article2",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem quibusdam cum quidem ea numquam molestias dignissimos tempora fugiat, facilis vel officiis atque maxime, inventore adipisci dolorum officia nam! Cum maiores commodi quia consequuntur, debitis harum sint porro reprehenderit asperiores facere et ratione rerum aliquid laudantium similique deleniti aliquam, incidunt accusantium aperiam maxime saepe veritatis? Harum, aperiam? Dolorem, necessitatibus dignissimos tenetur earum maiores tempora asperiores aliquid ullam ea quia suscipit corporis nisi iure praesentium, doloremque quibusdam eius optio et ex architecto fuga incidunt! Maiores placeat, nostrum delectus atque cupiditate accusantium ullam enim ipsum libero! Commodi itaque deserunt ullam modi maiores.",
    user_id: 2,
  },
  {
    id: 3,
    title: "Article3",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem quibusdam cum quidem ea numquam molestias dignissimos tempora fugiat, facilis vel officiis atque maxime, inventore adipisci dolorum officia nam! Cum maiores commodi quia consequuntur, debitis harum sint porro reprehenderit asperiores facere et ratione rerum aliquid laudantium similique deleniti aliquam, incidunt accusantium aperiam maxime saepe veritatis? Harum, aperiam? Dolorem, necessitatibus dignissimos tenetur earum maiores tempora asperiores aliquid ullam ea quia suscipit corporis nisi iure praesentium, doloremque quibusdam eius optio et ex architecto fuga incidunt! Maiores placeat, nostrum delectus atque cupiditate accusantium ullam enim ipsum libero! Commodi itaque deserunt ullam modi maiores.",
    user_id: 3,
  },
  {
    id: 4,
    title: "Article4",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem quibusdam cum quidem ea numquam molestias dignissimos tempora fugiat, facilis vel officiis atque maxime, inventore adipisci dolorum officia nam! Cum maiores commodi quia consequuntur, debitis harum sint porro reprehenderit asperiores facere et ratione rerum aliquid laudantium similique deleniti aliquam, incidunt accusantium aperiam maxime saepe veritatis? Harum, aperiam? Dolorem, necessitatibus dignissimos tenetur earum maiores tempora asperiores aliquid ullam ea quia suscipit corporis nisi iure praesentium, doloremque quibusdam eius optio et ex architecto fuga incidunt! Maiores placeat, nostrum delectus atque cupiditate accusantium ullam enim ipsum libero! Commodi itaque deserunt ullam modi maiores.",
    user_id: 4,
  },
  {
    id: 5,
    title: "Article5",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatem quibusdam cum quidem ea numquam molestias dignissimos tempora fugiat, facilis vel officiis atque maxime, inventore adipisci dolorum officia nam! Cum maiores commodi quia consequuntur, debitis harum sint porro reprehenderit asperiores facere et ratione rerum aliquid laudantium similique deleniti aliquam, incidunt accusantium aperiam maxime saepe veritatis? Harum, aperiam? Dolorem, necessitatibus dignissimos tenetur earum maiores tempora asperiores aliquid ullam ea quia suscipit corporis nisi iure praesentium, doloremque quibusdam eius optio et ex architecto fuga incidunt! Maiores placeat, nostrum delectus atque cupiditate accusantium ullam enim ipsum libero! Commodi itaque deserunt ullam modi maiores.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
